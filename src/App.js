import "./App.css";
import AddUserForm from "./Components/AddUserForm/AddUserForm";
import UserList from "./Components/UserList/UserList";

const users = [
  { key: 0.1785, name: "robert", age: 42 },
  { key: 0.2123, name: "robert", age: 42 },
];

function App() {
  return (
    <div className="App">
      <AddUserForm />
      <UserList users={users} />
    </div>
  );
}

export default App;
