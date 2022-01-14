import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const exp = props.expenses;
    return( exp && exp.map(e => { return <ExpenseItem title={e.title} amount={e.amount} date={e.date} /> }) 
    )
}

export default Expenses;