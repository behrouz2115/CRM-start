import React, { useState } from 'react';

const AddCustomerPage = () => {
    const [from, setForm] = useState({
        name: '',
        lastName: '',
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        data: "",
        products: []
    })
    return (
        <div>
            AddCustomerPage
        </div>
    );
};

export default AddCustomerPage;