import { useRouter } from 'next/router';
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
    const router = useRouter();
    const cancelHandler = () => {
        router.push("/");
    }
    const editHandler = async () => {
        const res = await fetch(`/api/edit/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ data: form }),
            headers: { "Content-type": "application/json" }
            // headers: { "ContentType": "application/json" }
        });
        const data = await res.json();
        if (data.status === 'success') {
            router.push("/")
        }
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