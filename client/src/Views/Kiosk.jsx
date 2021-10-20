import UserList from "../Components/UserList";
import DigitalClock from "../Components/DigitalClock"
import logo from "../Assets/img/safekeep_logo_light.png";

export default function Kiosk() {

  const list = [{
    id: 1,
    name: "Jack Iseton",
    img: "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
    status: "lunch"
  }, {
    id: 2,
    name: "Jack Black",
    img: "",
    status: "out"
  }, {
    id: 3,
    name: "Will Smith",
    img: "https://media1.popsugar-assets.com/files/thumbor/BIuyg4EYKCKQqOg44gdHyF_qi7I/613x51:2226x1664/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/26/001/n/1922398/c8450c525f97556842e0e2.16322452_/i/Will-Smith.jpg",
    status: "active"
  }, {
    id: 4,
    name: "Carlos Mancia",
    img: "",
    status: "active"
  }, {
    id: 5,
    name: "William Castro",
    img: "https://assets.podomatic.net/ts/be/89/f9/joel68406/640x640_11352982.jpg?1552766577",
    status: "active"
  }, {
    id: 6,
    name: "John Smith",
    img: "",
    status: "lunch"
  }]

  return (
    <div className="kiosk">
      <div className="kiosk__top-left">
        <img src={logo} alt="company logo" className="logo" />
      </div>
      <div className="kiosk__top-right">
        <input type="text" placeholder="Search..." className="kiosk__search"/>
      </div>
      <div className="kiosk__center-left">
        <DigitalClock classes="kiosk__clock" />
      </div>
      <div className="kiosk__bottom-right">
        <UserList users={list} />
      </div>
      <div className="kiosk__bottom-left">
        <h3>Johnson & Johnsons Co.</h3>
      </div>
    </div>
  )
}