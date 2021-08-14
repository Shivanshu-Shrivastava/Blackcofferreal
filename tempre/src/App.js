import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import First from './components/First'
import Home from './components/Home'


function App() {
  return (
    <Router>
      <Switch>
   
          <Route exact path='/'>
            <First />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          
      </Switch>
    </Router>
  );
}

export default App;
