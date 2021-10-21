import defaultUsr from '../Assets/img/default-user-image.png';
import { useEffect, useState } from 'react';

export default function UserList() {

  const usersArry = [{
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

  const [users, setUsers] = useState(usersArry);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {

    const filteredList = users.filter((person) => (
      person.name.toLowerCase().includes(query.toLowerCase())
    ));

    setResults(filteredList);

  }, [users, query])

  const userList = (query.length > 0) ? results : users;

  return (
    <div className="user-list">
      <div className="user-list__search">
        <input onChange={handleChange} value={query} type="text" placeholder="Search..." className="kiosk__search" />
      </div>

      {userList.map((user) => (
        <div className="user-list__container" key={user.id}>
          <div className="user-list__avatar">
            <div className="status-circle" data-status={user.status}></div>
            <img src={user.img ? user.img : defaultUsr} alt={user.name} />
          </div>
          <div className="user-list__name">
            <p>{user.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
};