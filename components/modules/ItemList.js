import FormInput from "./FormInput";

const ItemList = ({ form, setForm }) => {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };
  const changeHandler = () => {};
  return (
    <div className="item-list">
      <p>Purchased products</p>
      {products.map((product) => (
        <div className="form-input__list">
          <FormInput
            name="name"
            lable="Product name"
            type="text"
            value={product.name}
            onChange={changeHandler}
          />
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
};

export default ItemList;
