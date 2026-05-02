import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { CompareEditor } from "../components/contentPage/CompareEditor/CompareEditor"

export const CompareEditorPage = () => {
  return (
    <main className="main">
      <Header />
      <CompareEditor />
      <Footer />
    </main>
  )
}
