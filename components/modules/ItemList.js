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
  const changeHandler = (e,index) => { 
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({...form,products:newProducts})
     };
  const deletHandler = () => { 
   
     };
  return (
    <div className="item-list">
      <p>Purchased products</p>
      {products.map((product,index) => (
        <div key={index} className="form-input__list">
          <FormInput
            name="name"
            lable="Product name"
            type="text"
            value={product.name}
            onChange={e=>changeHandler(e,index)}
          />
          <div>
            <FormInput
              name="price"
              lable="Price"
              type="text"
              value={product.price}
              onChange={e=>changeHandler(e,index)}
            />
            <FormInput
              name="qty"
              lable="Qty"
              type="text"
              value={product.gty}
              onChange={e=>changeHandler(e,index)}
            />
              </div>
              <button onClick={()=>deletHandler(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
};

export default ItemList;
