import { useEffect, useState } from "react";
import Overview from "../Overview/Overview";
import Transaction from "../Transaction/Transaction";
import styles from "./expenseApp.module.css";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const allTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    setTransaction(allTransactions);
  }, []);

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
    const newTransaction = { ...formValues, id: new Date().getTime() };

    localStorage.setItem(
      "transactions",
      JSON.stringify([...transaction, newTransaction])
    );

    setTransaction([...transaction, newTransaction]);
  };

  return (
    <section className={styles.container}>
      <Overview
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <Transaction transaction={transaction} setTransaction={setTransaction} />
    </section>
  );
};

export default ExpenseApp;
