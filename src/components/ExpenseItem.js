import React, { useState } from 'react'; 

import ExpenseDate from './ExpenseDate';
import Card from './Card'
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickAction = () => {
        setTitle('Up!');
        console.log('AAAA');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
            <button onClick={clickAction}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;