const Transaction = ({ transaction }) => {
  return (
    <section>
      {transaction.map((t) => {
        return (
          <div key={t.id}>
            <p>{t.description}</p>
            <p>{t.amount}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Transaction;
