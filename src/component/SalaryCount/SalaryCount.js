import React from 'react';
import './SalaryCount.css'

const SalaryCount = (props) => {
    const { salary } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const product of salary) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.salary * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }


    return (
        <div className='salary'>
            <h3>  Singer Items: {totalQuantity}</h3>
            <h3>Total: {total}</h3>
        </div>
    );
};

export default SalaryCount;

