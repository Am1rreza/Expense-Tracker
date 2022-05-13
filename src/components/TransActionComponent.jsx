import { useEffect, useState } from "react";

const TransActionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transactions);

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transactions);
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  return (
    <section>
      <input
        className="search"
        placeholder="Search..."
        type="text"
        value={searchItem}
        onChange={changeHandler}
      />
      {filteredTnx.length != 0 &&
        filteredTnx.map((t) => (
          <div
            className="transaction"
            key={t.id}
            style={{ borderRight: t.type === "expense" && "4px solid red" }}
          >
            <span>{t.desc}</span>
            <span>{t.amount} $</span>
          </div>
        ))}
    </section>
  );
};

export default TransActionComponent;
