import styles from "./transaction.module.css";

const Transaction = ({ transaction }) => {
  return (
    <section>
      {transaction.length === 0 ? (
        <h3 style={{ padding: "20px 0 10px 0", textAlign: "center" }}>
          Add Transaction !
        </h3>
      ) : (
        transaction.map((t) => {
          return (
            <div
              key={t.id}
              className={styles.transaction}
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
              <span>{t.description}</span>
              <span>{t.amount}$</span>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Transaction;
