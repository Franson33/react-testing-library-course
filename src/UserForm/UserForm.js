import { useState } from "react";
import { InputWithLabel } from "../components/InputWithLabel";

export const UserForm = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (evt) => {
    evt.preventDefault();

    onAddUser({ name, email });
  };

  return (
    <form onSubmit={submitHandler}>
      <InputWithLabel label="Name" value={name} setValue={setName} />
      <InputWithLabel label="Email" value={email} setValue={setEmail} />
      <button>Add user</button>
    </form>
  );
};
