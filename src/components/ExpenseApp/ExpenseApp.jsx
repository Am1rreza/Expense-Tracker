import { useState } from "react";
import Transaction from "../Transaction/Transaction";
import styles from "./expenseApp.module.css";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  return (
    <section className={styles.container}>
      <div className={styles.topSection}>
        <p>Balance : {income - expense}</p>
        <button>Add</button>
      </div>
      <div className={styles.resultSection}>
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
      <Transaction transaction={transaction} />
    </section>
  );
};

export default ExpenseApp;
