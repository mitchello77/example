import { useState } from 'react';
import './App.css';
import UserList from './Components/UserList';
import { faker } from '@faker-js/faker';

function App() {

  const [users, setUsers] = useState([]);

  const getRandomInt = () => {
    return Math.floor(Math.random() * 1000);
  }

  const addUser = () => {
    // generate a random user
    const user = {
      id: getRandomInt(),
      name: faker.name.fullName(),
      email: faker.internet.email()
    };

    // merge new user into array of users!
    setUsers(previousUsers => [...previousUsers, user]);
  };


  return (
    <div className="App">
      <button onClick={addUser}>Add User!</button>
      <UserList users={users} />
    </div>
  );
}

export default App;
