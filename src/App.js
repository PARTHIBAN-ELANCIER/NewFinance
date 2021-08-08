import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Routes from './router'
import { withRouter } from 'react-router';

import { HashRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
    <Switch>
      {
        Routes.map((item , index) => {
          return <Route key={'route_' + index}
          path = {item.path}
          component = {item.component}
          exact = {item.exact || false}
          />
        })
      }
    </Switch>
  </HashRouter>
  );
}

export default App;
