import React from 'react';
import Card from '../modules/Card';

const HomePage = ({ customer }) => {
    console.log(customer);
    return (
        <div>
            {customer.map(item => <Card/>)}
        </div>
    );
};

export default HomePage;HomePage