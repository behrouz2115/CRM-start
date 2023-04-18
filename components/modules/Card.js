import Link from 'next/link';
import React from 'react';

const Card = ({ customer }) => {
    const deleteHandelr = () => {
        
    }
    return (
        <div className='card'>
            <div className='card__details'>
                <p>{customer.name} { customer.lastName }</p>
                <p>{customer.email}</p>
            </div>
            <div className='card__buttons'>
                <button onClick={deleteHandelr}>Delete</button>
                <Link href={`/edit/${customer._id}`}>Edit</Link>
                <Link href={`/customer/${customer._id}`} >Details</Link>
            </div>
        </div>
    );
};

export default Card;