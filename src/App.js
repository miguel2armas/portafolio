import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/home/home";
import {ContextProvider} from "./context/GlobalContext";
const App = () => {

  return (
      <div>
          <ContextProvider>
                  <main className="main minh-100vh">
                      <Home/>
                  </main>
          </ContextProvider>
      </div>
  );
}

export default App;
