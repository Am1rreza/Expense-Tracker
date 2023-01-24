import { useState } from "react";
import Overview from "../Overview/Overview";
import Transaction from "../Transaction/Transaction";
import styles from "./expenseApp.module.css";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  return (
    <section className={styles.container}>
      <Overview income={income} expense={expense} />
      <Transaction transaction={transaction} />
    </section>
  );
};

export default ExpenseApp;
