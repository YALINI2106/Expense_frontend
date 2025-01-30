import TransactionCard from "./TransactionCard";

const TransactionList = (props) => {
  return (
    <>
      <div>
        <h3>Transactions</h3>
        <hr></hr>
        {props.transactions.map((transaction, index) => {
          return (
            <TransactionCard
              key={index}
              index={index}
              id={transaction.id}
              title={transaction.title}
              amount={transaction.amount}
              removeFromList={props.removeFromList}
            />
          );
        })}
      </div>
    </>
  );
};
export default TransactionList;