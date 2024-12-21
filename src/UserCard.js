import React, { useState, useEffect } from 'react';
import './UserCard.css'; // Import the CSS file

function UserCard() {
  const [users, setUsers] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=6&seed=abc')
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <div className="card-container">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <div className='img_div'>
              <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
            </div>
            <div className='info_div'>
              <h3>{`${user.name.first} ${user.name.last}`}</h3>
              <p>Gender: {user.gender}</p>
              <p>Phone: {user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCard;
