import { useState, useRef, useEffect, useCallback } from 'react'
import { DiffEditor, Editor } from '@monaco-editor/react'
import type { editor as MonacoEditor } from 'monaco-editor'
import { useAppSelector } from '../../../redux/hooks'
import { selectTheme } from '../../../redux/reducers/themeReducer'
import { FormattedMessage } from 'react-intl'

const LANGUAGES = ['typescript', 'javascript', 'json', 'css', 'html', 'markdown']
const MOBILE_BP = 1024

// LCS-based line diff — returns which lines are deleted/inserted
type Edit =
  | { type: 'delete'; origLine: number }
  | { type: 'insert'; modLine: number }
  | { type: 'equal' }

function computeLineDiff(orig: string[], mod: string[]): Edit[] {
  const m = orig.length, n = mod.length
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = orig[i - 1] === mod[j - 1]
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1])
  const result: Edit[] = []
  let i = m, j = n
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && orig[i - 1] === mod[j - 1]) {
      result.unshift({ type: 'equal' }); i--; j--
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ type: 'insert', modLine: j }); j--
    } else {
      result.unshift({ type: 'delete', origLine: i }); i--
    }
  }
  return result
}

const sharedOptions: MonacoEditor.IStandaloneEditorConstructionOptions = {
  fontSize: 14,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  padding: { top: 14 },
  fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
  fontLigatures: true,
}

export const CompareEditor = () => {
  const [language, setLanguage] = useState('typescript')
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BP)
  const currentTheme = useAppSelector(selectTheme)
  const monacoTheme = currentTheme === 'dark' ? 'vs-dark' : 'vs'

  // Desktop DiffEditor
  const diffEditorRef = useRef<MonacoEditor.IDiffEditor | null>(null)

  // Mobile editors + diff decorations
  const origEditorRef = useRef<MonacoEditor.IStandaloneCodeEditor | null>(null)
  const modEditorRef = useRef<MonacoEditor.IStandaloneCodeEditor | null>(null)
  const origDecsRef = useRef<MonacoEditor.IEditorDecorationsCollection | null>(null)
  const modDecsRef = useRef<MonacoEditor.IEditorDecorationsCollection | null>(null)
  const origValueRef = useRef('')
  const modValueRef = useRef('')

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BP - 1}px)`)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    return () => {
      try { diffEditorRef.current?.setModel(null) } catch { /* ignore */ }
    }
  }, [])

  const updateDecorations = useCallback(() => {
    const origEditor = origEditorRef.current
    const modEditor = modEditorRef.current
    if (!origEditor || !modEditor) return

    const edits = computeLineDiff(
      origValueRef.current.split('\n'),
      modValueRef.current.split('\n'),
    )

    const origDecors: MonacoEditor.IModelDeltaDecoration[] = []
    const modDecors: MonacoEditor.IModelDeltaDecoration[] = []

    for (const edit of edits) {
      if (edit.type === 'delete') {
        origDecors.push({
          range: { startLineNumber: edit.origLine, startColumn: 1, endLineNumber: edit.origLine, endColumn: 1 },
          options: { isWholeLine: true, className: 'mobile-diff-delete' },
        })
      } else if (edit.type === 'insert') {
        modDecors.push({
          range: { startLineNumber: edit.modLine, startColumn: 1, endLineNumber: edit.modLine, endColumn: 1 },
          options: { isWholeLine: true, className: 'mobile-diff-insert' },
        })
      }
    }

    origDecsRef.current?.set(origDecors)
    modDecsRef.current?.set(modDecors)
  }, [])

  return (
    <div className={`compareEditor compareEditor--${currentTheme}`}>
      <div className="compareEditor__toolbar">
        <label className="compareEditor__langLabel">
          <FormattedMessage id="app.compareEditor_language" />
        </label>
        <select
          className="compareEditor__langSelect"
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          {LANGUAGES.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>

        <div className="compareEditor__labels">
          <span><FormattedMessage id="app.compareEditor_original" /></span>
          <span><FormattedMessage id="app.compareEditor_modified" /></span>
        </div>
      </div>

      {isMobile ? (
        <div className="compareEditor__stacked">
          <div className="compareEditor__stackedPanel">
            <div className="compareEditor__stackedLabel">
              <FormattedMessage id="app.compareEditor_original" />
            </div>
            <Editor
              height="100%"
              language={language}
              theme={monacoTheme}
              defaultValue={`// ${language} — original`}
              onMount={(editor) => {
                origEditorRef.current = editor
                origDecsRef.current = editor.createDecorationsCollection()
                origValueRef.current = editor.getValue()
                updateDecorations()
                editor.onDidChangeModelContent(() => {
                  origValueRef.current = editor.getValue()
                  updateDecorations()
                })
              }}
              options={sharedOptions}
            />
          </div>
          <div className="compareEditor__stackedDivider" />
          <div className="compareEditor__stackedPanel">
            <div className="compareEditor__stackedLabel">
              <FormattedMessage id="app.compareEditor_modified" />
            </div>
            <Editor
              height="100%"
              language={language}
              theme={monacoTheme}
              defaultValue={`// ${language} — modified`}
              onMount={(editor) => {
                modEditorRef.current = editor
                modDecsRef.current = editor.createDecorationsCollection()
                modValueRef.current = editor.getValue()
                updateDecorations()
                editor.onDidChangeModelContent(() => {
                  modValueRef.current = editor.getValue()
                  updateDecorations()
                })
              }}
              options={sharedOptions}
            />
          </div>
        </div>
      ) : (
        <div className="compareEditor__editor">
          <DiffEditor
            height="calc(100vh - 215px)"
            language={language}
            theme={monacoTheme}
            original={`// ${language} — original`}
            modified={`// ${language} — modified`}
            onMount={(editor) => { diffEditorRef.current = editor }}
            options={{
              originalEditable: true,
              renderSideBySide: true,
              readOnly: false,
              ...sharedOptions,
            }}
          />
        </div>
      )}
    </div>
  )
}
