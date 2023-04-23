import React from "react";
import FormInput from "./FormInput";
import ItemList from "./ItemList";

const Form = ({ form, setForm }) => {
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <FormInput
        name="name"
        lable="Name"
        type="text"
        value={form.name}
        onChange={changeHandler}
      />
      <FormInput
        name="lastName"
        lable="Last Name"
        type="text"
        value={form.lastName}
        onChange={changeHandler}
      />
      <FormInput
        name="email"
        lable="Email"
        type="text"
        value={form.email}
        onChange={changeHandler}
      />
      <FormInput
        name="phone"
        lable="Phone"
        type="tell"
        value={form.phone}
        onChange={changeHandler}
      />
      <FormInput
        name="address"
        lable="Address"
        type="text"
        value={form.address}
        onChange={changeHandler}
      />
      <FormInput
        name="postalCode"
        lable="Postal Code"
        type="text"
        value={form.postalCode}
        onChange={changeHandler}
          />
            <FormInput
        name="date"
        lable="Date"
        type="date"
        value={form.date}
        onChange={changeHandler}
          />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
};

export default Form;
