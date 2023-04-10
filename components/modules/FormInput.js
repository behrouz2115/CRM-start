const FormInput = ({ name, lable, type, value, onChange }) => {
  return (
    <div className="form-input">
      <lable htmlFor={name}>{lable}</lable>
      <input
        name={name}
        type={type}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
