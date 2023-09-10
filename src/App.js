import { useState } from "react";
import Card from "./components/UI/Card";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import classes from "./components/Users/UserList.module.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUser) => {
      return [user, ...prevUser];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {users.length === 0 ? (
        <Card className={classes.users}>
          <h3>No users yet.</h3>
        </Card>
      ) : (
        <UsersList users={users} />
      )}
    </div>
  );
}

export default App;
