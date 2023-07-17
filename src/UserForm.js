import { InputWithLabel } from "./components/InputWithLabel";

export const UserForm = () => {
  return (
    <form>
      <InputWithLabel label="Name" />
      <InputWithLabel label="Email" />
      <button>Add user</button>
    </form>
  );
};
