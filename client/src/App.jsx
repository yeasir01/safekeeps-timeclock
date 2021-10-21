import React from 'react';
import './Styles/index.scss';
import Kiosk from './Views/Kiosk';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {

  return (
    <React.Fragment>
      <Router>
        <Kiosk />
      </Router>
    </React.Fragment>
  )
};
