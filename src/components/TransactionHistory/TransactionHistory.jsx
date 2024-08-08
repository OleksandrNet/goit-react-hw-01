import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <th className={css.list}>{item.type}</th>
              <th className={css.list}>{item.amount}</th>
              <th className={css.list}>{item.currency}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
