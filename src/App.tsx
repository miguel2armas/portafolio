
import { Page } from "./components/Page";
import { IntlProvider } from 'react-intl'
import { en_US } from './lang/en-US'
import { es_CO } from './lang/es-CO'
import { useAppSelector } from "./redux/hooks";
import { selectLanguage } from "./redux/reducers/languageReducer";


function App() {
  const currentLanguage = useAppSelector(selectLanguage);
  return (
          <IntlProvider messages={currentLanguage==="en-US"?en_US:es_CO} locale={currentLanguage} defaultLocale="en-US">
            <Page/>
          </IntlProvider>
          );
}

export default App;
