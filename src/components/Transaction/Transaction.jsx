import { useEffect, useState } from "react";
import styles from "./transaction.module.css";
import { FaTrash } from "react-icons/fa";

const Transaction = ({ transaction, setTransaction }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transaction);

  useEffect(() => {
    filterTransactions(searchValue);
  }, [transaction]);

  // Handlers
  const filterTransactions = (searchItem) => {
    if (!searchItem || searchItem === "") {
      setFilteredTransactions(transaction);
      return;
    }

    const filtered = transaction.filter((t) =>
      String(t.description).toLowerCase().includes(searchItem.toLowerCase())
    );

    setFilteredTransactions(filtered);
  };

  const deleteHandler = (id) => {
    const filteredTransaction = transaction.filter(
      (t) => t.id !== parseInt(id)
    );

    localStorage.setItem("transactions", JSON.stringify(filteredTransaction));

    setTransaction(filteredTransaction);
  };

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    filterTransactions(e.target.value);
  };

  // Conditional rendering
  if (!transaction.length)
    return (
      <h3 style={{ padding: "20px 0 10px 0", textAlign: "center" }}>
        Add Transaction !
      </h3>
    );

  return (
    <section>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search Transaction..."
          value={searchValue}
          onChange={changeHandler}
        />
      </div>

      {/* loop on transactions */}
      {filteredTransactions.length === 0 ? (
        <h3 style={{ padding: "20px 0 10px 0", textAlign: "center" }}>
          No Item Matches !
        </h3>
      ) : (
        filteredTransactions.map((t) => {
          return (
            <div
              key={t.id}
              className={styles.transaction}
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
              <span>{t.description}</span>
              <div className={styles.subTransaction}>
                <span>{t.amount}$</span>
                <FaTrash
                  onClick={() => deleteHandler(t.id)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Transaction;
