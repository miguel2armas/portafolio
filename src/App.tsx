import { HashRouter, Routes, Route } from 'react-router-dom';
import { Page } from "./components/Page";
import { TsEditorPage } from "./pages/TsEditorPage";
import { CompareEditorPage } from "./pages/CompareEditorPage";
import { IntlProvider } from 'react-intl'
import { en_US } from './lang/en-US'
import { es_CO } from './lang/es-CO'
import { useAppSelector } from "./redux/hooks";
import { selectLanguage } from "./redux/reducers/languageReducer";
import LogRocket from 'logrocket';

LogRocket.init('vdqy85/miguel-armas');

function App() {
  const currentLanguage = useAppSelector(selectLanguage);
  return (
    <IntlProvider messages={currentLanguage === "en-US" ? en_US : es_CO} locale={currentLanguage} defaultLocale="en-US">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/ts-editor" element={<TsEditorPage />} />
          <Route path="/compare-editor" element={<CompareEditorPage />} />
        </Routes>
      </HashRouter>
    </IntlProvider>
  );
}

export default App;
