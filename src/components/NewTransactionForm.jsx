import { useState } from "react"

const NewTransactionForm=(props)=>{
    
    //two statevariables to  get the input values as normal variable wont work
    const[title,setTitle]=useState("")
    const[amount,setAmount]=useState(0)

    const handleTitleChange=(e)=>{
         setTitle(e.target.value)
    }
    console.log(title)
    const handleAmountChange=(e)=>{
          setAmount(+e.target.value)
    }
    console.log(amount)
    

    const addTransaction=(e)=>{
        e.preventDefault()
        // console.log("added")
        if(amount=== 0 || title===""){
           alert("Please fill both the fields!")
           return
        }
        props.addToList(title,amount)
        setAmount(0)
        setTitle(" ")  //resets the input fields
    }
    return(
        <>
        <form>
            <div className="form-group"> 
            <h3>Add new transaction here!</h3>
            <hr></hr>
                <label htmlFor="title" >Title</label>
                <input type="text" id="title" value={title} onChange={handleTitleChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={amount} onChange={handleAmountChange}></input>
            <button onClick={addTransaction}>ADD TRANSACTION</button>
            </div>
        </form>
        </>
    )
}
export default NewTransactionForm