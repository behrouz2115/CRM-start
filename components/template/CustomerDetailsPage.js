import moment from 'moment';
import React from 'react';

const CustomerDetailsPage = ({ data }) => {
    console.log(data);
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
                            <p>{ item.name }</p>
                            <p>{ item.price }</p>
                            <p>{ item.qty }</p>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};

export default CustomerDetailsPage;