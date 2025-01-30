const TransactionCard=(props)=>{
    //const {index,title,amount,removeFromList,}=props
    const colorClass= props.amount>=0 ?'positive':'negative'

    const deleteTransaction=()=>{
       props.removeFromList(props.id)
    }  
   //  this above code would call the removeFromList() in App.jsx
    
   return(
       <>
       <div className="transaction-card-container">
            <div className={`transaction-card ${colorClass}`}>
           <span>{props.title}</span>
           <span>${props.amount}</span>
            </div>
           <div className="btn-container">
           <button onClick={deleteTransaction}>Delete</button>
          </div>
       </div>
       </>
   )
}
export default TransactionCard