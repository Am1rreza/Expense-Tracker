import { useState } from "react";
import styles from "./overview.module.css";

const Overview = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className={styles.topSection}>
        <p>Balance: {income - expense}$</p>
        <button
          className={`${styles.btn} ${isShow && styles.cancel}`}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransactionForm
          setIsShow={setIsShow}
          addTransaction={addTransaction}
        />
      )}
      <div className={styles.resultSection}>
        <div className={styles.expenseBox}>
          Expense<span style={{ color: "red" }}>{expense}$</span>
        </div>
        <div className={styles.expenseBox}>
          Income<span style={{ color: "green" }}>{income}$</span>
        </div>
      </div>
    </>
  );
};

export default Overview;

// TransactionForm component
const TransactionForm = ({ setIsShow, addTransaction }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: "",
    description: "",
  });

  // Handlers
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    addTransaction(formValues);

    setIsShow(false);

    setFormValues({
      type: "expense",
      amount: "",
      description: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formValues.description}
        onChange={changeHandler}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formValues.amount}
        onChange={changeHandler}
      />
      <div className={styles.radioBox}>
        <input
          type="radio"
          value="expense"
          name="type"
          id="expense"
          checked={formValues.type === "expense"}
          onChange={changeHandler}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          id="income"
          checked={formValues.type === "income"}
          onChange={changeHandler}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button className={`${styles.btn} ${styles.primary}`} type="submit">
        Add Transaction
      </button>
    </form>
  );
};
