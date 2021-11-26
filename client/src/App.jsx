import React from 'react';
import Kiosk from './Views/Kiosk';
import Test from './Components/PinPad';
import DashBoard from './Views/DashBoard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {lightTheme} from './Styles/theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={ lightTheme }>
        <Router>
          <Switch>
            <Route exact path="/">
              <div>Welcome</div>
            </Route>
            <Route path="/kiosk" component={Kiosk} />
            <Route path="/admin/dashboard" component={DashBoard} />
            <Route path="/test" component={Test} />
          </Switch>
        </Router>
      </ ThemeProvider>
    </React.Fragment>
  )
};