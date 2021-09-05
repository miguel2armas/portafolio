import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./components/home/home";


const App = () => {
    const [checkedTheme, setChecked] = useState(
        localStorage.getItem("theme") === "dark"
    );
    useEffect(() => {
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
    }, [checkedTheme]);
    const changeThemeDark = () => {
        if (checkedTheme === false) {
            localStorage.setItem("theme", "dark");
            setChecked(true);
        } else {
            localStorage.setItem("theme", "light");
            setChecked(false);
        }
    };

  return (
      <Router>
          <main className="main minh-100vh">
              <Route exact path="/" >
                  <Home changeThemeDark={changeThemeDark} checkedTheme={checkedTheme}/>
              </Route>
          </main>
      </Router>
  );
}

export default App;
