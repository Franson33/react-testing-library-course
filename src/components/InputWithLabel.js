export const InputWithLabel = ({ label, value, setValue }) => {
  const changeHandler = (evt) => {
    setValue(evt.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={changeHandler} />
    </div>
  );
};
