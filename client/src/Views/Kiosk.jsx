import UserList from "../Components/UserList";
import DigitalClock from "../Components/DigitalClock"
import PinPad from "../Components/PinPad"
import logo from "../Assets/img/safekeep_logo_light.png";
import {Switch, Route} from 'react-router-dom';

export default function Kiosk() {

  return (
    <div className="kiosk">
      <div className="kiosk__top-left">
        <img src={logo} alt="company logo" className="logo" />
      </div>
      <div className="kiosk__center-left">
        <DigitalClock classes="kiosk__clock" />
      </div>
      <div className="kiosk__right">
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/pin">
            <PinPad />
          </Route>
        </Switch>
      </div>
      <div className="kiosk__bottom-left">
        <h3>Johnson & Johnsons Co.</h3>
      </div>
    </div>
  )
}