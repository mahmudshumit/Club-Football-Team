
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
import TeamDetail from './Components/TeamDetail/TeamDetail';
import Footer from './Components/Footer/Footer';


function App() {
  return (

    <Router>
      <Header></Header>




      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>

        </Route>
        <Route path="/team/:teamId">
          <TeamDetail></TeamDetail>

        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>

      </Switch>
      <Footer></Footer>

    </Router>

  );
}

export default App;
