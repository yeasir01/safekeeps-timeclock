import './Styles/index.scss';
import UserList from './Components/UserList.jsx';

export default function App() {

  const list = [{
    id: 1,
    name: "Sam I'am",
    img: "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
    status: "active"
  },{
    id: 2,
    name: "Carlos Mancia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJOK56kPcGsuz1GqL08dvA9E-akrtLKancX6EnG4qZUC-THtC4JMOCkqS6WYUW_41YH8&usqp=CAU",
    status: "active"
  },{
    id: 3,
    name: "Will Smith",
    img: "https://media1.popsugar-assets.com/files/thumbor/BIuyg4EYKCKQqOg44gdHyF_qi7I/613x51:2226x1664/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/26/001/n/1922398/c8450c525f97556842e0e2.16322452_/i/Will-Smith.jpg",
    status: "inactive"
  }]

  return (
    <div className="App">
      <header className="App-header">
          <UserList users={list}/>
      </header>
    </div>
  );
};
