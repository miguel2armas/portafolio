import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./components/home/home";
import MemoryPage from "./components/game_memory/memory_page";
import {ContextProvider} from "./context/GlobalContext";
const App = () => {

  return (
      <div>
          <ContextProvider>
              <Router>
                  <main className="main minh-100vh">
                      <Route exact path="/" >
                          <Home/>
                      </Route>
                      <Route path="/memory">
                          <MemoryPage/>
                      </Route>
                  </main>
              </Router>
          </ContextProvider>
      </div>
  );
}

export default App;
