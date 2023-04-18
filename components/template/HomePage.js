import React from 'react';
import Card from '../modules/Card';

const HomePage = ({ customer }) => {
    console.log(customer);
    return (
        <div>
            {customer.map(item => <Card key={item._id} customer={ item } />)}
        </div>
    );
};

export default HomePage;HomePage