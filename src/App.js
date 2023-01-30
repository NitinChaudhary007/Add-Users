import React, { useState } from "react";

import "./App.css";
import AddUserForm from "./Components/AddUserForm/AddUserForm";
import Users from "./Components/UserList/Users";

const demousers = [
  { key: 0.1785, name: "robert", age: 42 },
  { key: 0.2123, name: "Rohit", age: 22 },
];

function App() {
  const [usersList, setUsersList] = useState(demousers);

  const addUserHandler = (newUser) => {
    setUsersList((prevState) => {
      return [newUser, ...prevState];
    });
  };

  return (
    <div className="App">
      <AddUserForm fun={addUserHandler} />
      <Users users={usersList}  />
    </div>
  );
}

export default App;
