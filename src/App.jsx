import { useEffect, useState } from "react";
import "./App.css";
import TransactionList from "./components/TransactionList";
import NewTransactionForm from "./components/NewTransactionForm";
import IncExpConatiner from "./components/IncExpContainer";
import axios from 'axios';
function App() {
 
  //defining transactions array as statevariable bcz when we update it we want it to be reflected in ui so
  const [transactions,setTransactions]=useState([
    // { title: "Headphones", amount: -50 },
    // { title: "Coffee Mug", amount: -12 },
    // { title: "Backpack", amount: -40 },
    // { title: "Salary", amount: 2500 },
    // { title: "Fees", amount: -3000 },
    // { title: "Income", amount: 1500 },
  ]);


  // this function is to display the stored data that is fetches data from mongodb and displays iit in our page
  useEffect(()=>{
    const fetchData=async()=>{
      const response= await axios.get("https://mern-backend-cgka.onrender.com/api/expenses")
      // console.log(response)
      setTransactions(response.data)
    }
    fetchData()
  },[])


  const addToList= async (title,amount)=>{
      await axios.post("https://mern-backend-cgka.onrender.com/api/expenses",{
          title,
          amount

        })

        setTransactions([...transactions,{title:title,amount:amount}])
}

  const removeFromList=async(id)=>{
    // console.log("deleted")
    await axios.delete(`https://mern-backend-cgka.onrender.com/api/expenses/${id}`)
    const newTransactions=transactions.filter((txn)=>txn._id!==id);
    setTransactions(newTransactions);
  }


  return (
    <>
      <div>
        <div className="container">
          <h2>EXPENSE TRACKER</h2>
          <IncExpConatiner transactions={transactions}/>
          <TransactionList transactions={transactions} removeFromList={removeFromList}/>
          <NewTransactionForm  addToList={addToList}/>
          
        </div>
      </div>
    </>
  );
}

export default App;