import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./components/home/home";

function App() {
  return (
      <Router>
          <main className="main minh-100vh">
              <Route exact path="/" component={Home}/>
          </main>
      </Router>
  );
}

export default App;
