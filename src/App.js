import React, { useState } from "react";

import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";


const DUMMY_DATA = [
  {
    id: 0.1251,
    name: "Max",
    age: 20,
  },
  {
    id: 0.1249,
    name: "Lucas",
    age: 20,
  },
];

function App() {
  
  const [usersList, setUsersList] = useState(DUMMY_DATA);

  const addUserHandler = (data) => {
    setUsersList((prevState) => {
      return [...prevState, data];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
