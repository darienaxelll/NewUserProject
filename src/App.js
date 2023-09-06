import { useState } from "react";
import AddUser from "./components/AddUser.js";
import UsersList from "./components/UsersList.js";
import ErrorModal from "./UI/ErrorModal.js";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUser) => {
      return [user, ...prevUser];
    });
  };

  console.log(users.length);

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
      <ErrorModal />
    </div>
  );
}

export default App;
