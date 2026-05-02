import { useRef, useState } from 'react'
import Editor from '@monaco-editor/react'
import { useAppSelector } from '../../../redux/hooks'
import { selectTheme } from '../../../redux/reducers/themeReducer'
import { FormattedMessage, useIntl } from 'react-intl'
import type { ConsoleOutput } from '../../../types/worker'

const DEFAULT_CODE = `// Press ▶ Run to execute your code

const greet = (name: string): string => \`Hello, \${name}!\`

greet("World")

const numbers: number[] = [1, 2, 3, 4, 5]
numbers.map(n => n * n)

interface User {
  name: string
  currentAge: number
}

const user: User = { name: "Miguel", currentAge: 2026 }
user`

const TYPE_ICONS: Record<string, string> = {
  log: '›',
  error: '✕',
  warn: '⚠',
  info: 'ℹ',
}

export const TsEditor = () => {
  const editorRef = useRef<any>(null)
  const [output, setOutput] = useState<ConsoleOutput[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [injectLogs, setInjectLogs] = useState(true)
  const currentTheme = useAppSelector(selectTheme)
  const monacoTheme = currentTheme === 'dark' ? 'vs-dark' : 'vs'
  const intl = useIntl()

  const handleEditorMount = (editor: any) => {
    editorRef.current = editor
  }

  const runCode = async () => {
    if (!editorRef.current || isRunning) return
    setIsRunning(true)
    try {
      const result = await new Promise<ConsoleOutput[]>((resolve, reject) => {
        const worker = new Worker(
          new URL('../../../workers/runCode.ts', import.meta.url),
          { type: 'module' }
        )
        const timeout = setTimeout(() => {
          reject(new Error('Worker timeout after 10s'))
          worker.terminate()
        }, 10000)
        worker.postMessage({
          activeTabCode: editorRef.current.getValue(),
          name: 'main.ts',
          injectLogs,
        })
        worker.onmessage = (e: MessageEvent) => {
          clearTimeout(timeout)
          resolve(e.data)
          worker.terminate()
        }
        worker.onerror = (err) => {
          clearTimeout(timeout)
          reject(err)
          worker.terminate()
        }
      })
      setOutput(result)
    } catch (err) {
      setOutput([{
        type: 'error',
        content: `Failed to run: ${err}`,
        line: 0,
        column: 0,
        timestamp: Date.now(),
      }])
    } finally {
      setIsRunning(false)
    }
  }

  return (
    <div className={`tsEditor tsEditor--${currentTheme}`}>
      <div className="tsEditor__toolbar">
        <button
          className={`tsEditor__btn tsEditor__btn--run ${isRunning ? 'tsEditor__btn--running' : ''}`}
          onClick={runCode}
          disabled={isRunning}
          title={intl.formatMessage({ id: 'app.tsEditor_run' })}
        >
          {isRunning ? '◼' : '▶'}&nbsp;
          <FormattedMessage id={isRunning ? 'app.tsEditor_running' : 'app.tsEditor_run'} />
        </button>

        <label className="tsEditor__autoLog">
          <input
            type="checkbox"
            checked={injectLogs}
            onChange={e => setInjectLogs(e.target.checked)}
          />
          <span><FormattedMessage id="app.tsEditor_autoLog" /></span>
        </label>

        <button
          className="tsEditor__btn tsEditor__btn--clear"
          onClick={() => setOutput([])}
          disabled={output.length === 0}
        >
          <FormattedMessage id="app.tsEditor_clear" />
        </button>
      </div>

      <div className="tsEditor__monaco">
        <Editor
          height="calc((100vh - 240px) * 0.58)"
          defaultLanguage="typescript"
          defaultValue={DEFAULT_CODE}
          theme={monacoTheme}
          onMount={handleEditorMount}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            padding: { top: 14 },
            fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
            fontLigatures: true,
          }}
        />
      </div>

      <div className="tsEditor__consoleBar">
        <span className="tsEditor__consoleTitle">
          <FormattedMessage id="app.tsEditor_console" />
        </span>
        {output.length > 0 && (
          <span className="tsEditor__consoleBadge">{output.length}</span>
        )}
      </div>

      <div className="tsEditor__console">
        {output.length === 0 ? (
          <div className="tsEditor__consoleEmpty">
            <FormattedMessage id="app.tsEditor_consoleEmpty" />
          </div>
        ) : (
          output.map((entry, i) => (
            <div key={i} className={`tsEditor__consoleLine tsEditor__consoleLine--${entry.type}`}>
              <span className="tsEditor__consoleIcon">{TYPE_ICONS[entry.type]}</span>
              {entry.line > 0 && (
                <span className="tsEditor__consoleLineNum">{entry.line}</span>
              )}
              <pre className="tsEditor__consoleContent">{entry.content}</pre>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
