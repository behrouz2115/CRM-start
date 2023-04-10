const ItemList = ({ form, setForm }) => {
    const { products } = form;

    const addHandler = () => {
        setForm({
            ...form, products: [...products, { name: "", price: '', qty: "" }]
        });
        console.log(products);
    }
    return (
        <div className="item-list">
            <p>Purchased products</p>
            <button onClick={addHandler}>Add Item</button>
        </div>
    );
};

export default ItemList;