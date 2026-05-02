import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { TsEditor } from "../components/contentPage/TsEditor/TsEditor"

export const TsEditorPage = () => {
  return (
    <main className="main">
      <Header />
      <TsEditor />
      <Footer />
    </main>
  )
}
