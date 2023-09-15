import { useState } from "react";
import Wrapper from "./components/Helper/Wrapper";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUser) => {
      return [...prevUser, { username: uName, age: uAge }];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </Wrapper>
  );
}

export default App;
