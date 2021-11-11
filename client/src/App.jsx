import React from 'react';
import './Styles/index.scss';
import Kiosk from './Views/Kiosk';
import Test from './Components/UserListContainer';
import Search from './Components/Search';
import DashBoard from './Views/DashBoard';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <div>Home Page</div>
          </Route>
          <Route path="/kiosk" component={Kiosk}/>
          <Route path="/admin/dashboard" component={DashBoard}/>
          <Route path="/test" component={Test}/>
          <Route path="/test2" component={Search}/>
        </Switch>
      </Router>
    </React.Fragment>
  )
};