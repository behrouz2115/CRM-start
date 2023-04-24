import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const CustomerDetailsPage = ({ data }) => {
    console.log(data);
    const router = useRouter();
    const deleteHandler = async () => {
        const res = await fetch(`/api/delete/${data._id}`, {
            method: "DELETE"
        });
        const newData = await res.json();
        if (newData.status === "success") router.push('/');
    }
    return (
        <div className='customer-detail'>
            <h4>Customer Details</h4>
            <div className='customer-detail__main'>
                <div className='customer-detail__item'>
                    <span>Name:</span>
                    <p>{ data.name }</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Last Name:</span>
                    <p>{ data.lastName }</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Email:</span>
                    <p>{ data.email }</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Phone:</span>
                    <p>{ data.phone }</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Address:</span>
                    <p>{ data.address }</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Postal Code:</span>
                    <p>{ data.postalCode }</p>
                </div>
                <div className='customer-detail__item'>
                    <span>Date:</span>
                    <p>{ (moment(data.date).utc().format("YYYY-MM_DD")) }</p>
                </div>
            </div>
            <div className='customer-detail__products'>
                <p>Name</p>
                <p>Price</p>
                <p>Qty</p>
                {
                    data.products.map((item,index) => (
                        <React.Fragment key={index}>
                            <span>{ item.name }</span>
                            <p>{ item.price }</p>
                            <p>{ item.qty }</p>
                        </React.Fragment>
                    ))
                }
            </div>
            <div className='customer-detail__buttons'>
                <p>Edit or Delete?</p>
                <button onClick={deleteHandler} >Delete</button>
                <Link href={`/edit/${data._id}`}>Edit</Link>
            </div>
        </div>
    );
};

export default CustomerDetailsPage;