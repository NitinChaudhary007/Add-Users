import React, { useState } from "react";

import "./App.css";
import AddUserForm from "./Components/AddUserForm/AddUserForm";
import UserList from "./Components/UserList/UserList";

const demousers = [
  { key: 0.1785, name: "robert", age: 42 },
  { key: 0.2123, name: "Rohit", age: 22 },
];

function App() {
  const [usersList, setUsersList] = useState(demousers);

  const addUser = (userName, age) => {
    const newUser = { key: Math.random(), name: userName, age: age };
    setUsersList(newUser);
  };

  return (
    <div className="App">
      <AddUserForm />
      <UserList users={demousers} fun={addUser} />
    </div>
  );
}

export default App;
