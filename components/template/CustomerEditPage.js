import React, { useState } from 'react';
import Form from '../modules/Form';

const CustomerEditPage = ({ data, id }) => {
    const [form, setForm] = useState({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || "",
        address: data.address || "",
        phone: data.phone || "",
        postalCode: data.postalCode || "",
        date: data.date || "",
        products: data.products
    });
    const cancelHandler = () => {
        
    }
    const editHandler = () => {
        
    }
    return (
        <div className='customer-page'>
            <h4>Edded cusotmer</h4>
            <Form form={form} setForm={setForm} />
            ,<div className='customer-page__buttons'>
                <button className='first' onClick={cancelHandler}>Cancel</button>
                <button className='second' onClick={editHandler}>Edit</button>
            </div>
        </div>
    );
};

export default CustomerEditPage;