import React from 'react';
import './Styles/index.scss';
import Kiosk from './Views/Kiosk';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <div>Home Page</div>
          </Route>
          <Route path="/kiosk" component={Kiosk}/>
        </Switch>
      </Router>
    </React.Fragment>
  )
};
