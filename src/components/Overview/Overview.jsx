import { useState } from "react";
import styles from "./overview.module.css";

const Overview = ({ income, expense }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className={styles.topSection}>
        <p>Balance : {income - expense}</p>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransactionForm />}
      <div className={styles.resultSection}>
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
    </>
  );
};

export default Overview;

// TransactionForm component
const TransactionForm = () => {
  return (
    <form>
      <input type="text" name="description" />
      <input type="number" name="amount" />
      <div>
        <input type="radio" value="expense" name="type" id="expense" />
        <label htmlFor="expense">Expense</label>
        <input type="radio" value="income" name="type" id="income" />
        <label htmlFor="income">Income</label>
      </div>
      <button>Add Transaction</button>
    </form>
  );
};
