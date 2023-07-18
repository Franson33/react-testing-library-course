import { useState } from "react";
import { UserForm } from "./UserForm/UserForm";
import { UserList } from "./UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const onAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onAddUser={onAddUser} />
      <hr />
      <UserList users={users} />
    </div>
  );
};

export default App;
