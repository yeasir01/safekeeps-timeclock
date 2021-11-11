import UserList from "../Components/User";
import DigitalClock from "../Components/DigitalClock"
import PinPad from "../Components/PinPad"
import logo from "../Assets/img/safekeep_logo_light.png";
import { useState } from "react";

const INTIAL_USER_STATE = {
  id: "",
  pin: "",
  name: "",
}

export default function Kiosk() {
  const [user, setUser] = useState(INTIAL_USER_STATE);
  const [showPin, setShowPin] = useState(false);

  const handleSelect = (event) => {
    const userID = event.currentTarget.getAttribute("data-id");
    const userName = event.currentTarget.getAttribute("data-name");
    setUser({ ...user, id: userID, name: userName });
    setShowPin(true);
  }

  return (
    <div className="kiosk">
      <div className="kiosk__left">
        <div className="kiosk__logo">
          <img src={logo} alt="company logo" />
        </div>
        <DigitalClock styles="kiosk__clock" includeDate={true} />
        <div className="kiosk__company">
          <p>Johnson & Johnsons Co.</p>
        </div>
      </div>
      <div className="kiosk__right">
        {showPin ? <PinPad user={user}/> : <UserList handleSelect={handleSelect} />}
      </div>
    </div>
  )
}