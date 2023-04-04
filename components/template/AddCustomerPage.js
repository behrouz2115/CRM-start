import React, { useState } from 'react';
import Form from '../modules/Form';

const AddCustomerPage = () => {
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        data: "",
        products: []
    });
    const cancelHandler = () => {
        console.log('cancel');
    }
    const saveHandler = () => {
        console.log('save');
    }
    return (
        <div className='customer-page'>
            <h4>Add New Customer</h4>
            <Form form={form} setForm={setForm} />
            <div className='customer-page__buttons'> 
                <button className='first' onClick={cancelHandler}> Cancel</button>
                <button className='second' onClick={saveHandler}> Save</button>
            </div>
        </div>
    );
};

export default AddCustomerPage;