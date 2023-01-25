import { useEffect, useState } from "react";
import Overview from "../Overview/Overview";
import Transaction from "../Transaction/Transaction";
import styles from "./expenseApp.module.css";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    let exp = 0;
    let inc = 0;

    transaction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseInt(t.amount))
        : (inc = inc + parseInt(t.amount));
    });

    setExpense(exp);
    setIncome(inc);
  }, [transaction]);

  // Handlers
  const addTransaction = (formValues) => {
    setTransaction([
      ...transaction,
      { ...formValues, id: new Date().getTime() },
    ]);
  };

  return (
    <section className={styles.container}>
      <Overview
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <Transaction transaction={transaction} />
    </section>
  );
};

export default ExpenseApp;
