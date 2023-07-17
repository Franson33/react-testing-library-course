import { useState } from "react";
import { InputWithLabel } from "../components/InputWithLabel";

export const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (evt) => {
    evt.preventDefault();

    console.log({ name, email });
  };

  return (
    <form onSubmit={submitHandler}>
      <InputWithLabel label="Name" value={name} setValue={setName} />
      <InputWithLabel label="Email" value={email} setValue={setEmail} />
      <button>Add user</button>
    </form>
  );
};
