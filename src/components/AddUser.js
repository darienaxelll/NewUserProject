import { useState } from "react";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      age: age,
    };
    
    setUsername("");
    setAge("");
  };

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageHandler} />
        <input type="submit" value="Submit" onClick={submitHandler} />
      </form>
    </div>
  );
};

export default AddUser;
