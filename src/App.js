
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

      <div>
     

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/about">
          
          </Route>
          <Route path="*">
          <NoMatch></NoMatch>
          </Route>
         
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
