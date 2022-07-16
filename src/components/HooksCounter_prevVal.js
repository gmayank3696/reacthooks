import React, {useState}from 'react'

function HooksCounter_prevVal() {

    let initialCount = 0

    let [count, setCount] = useState(initialCount) 

    let increamentFive = () =>{
            setCount((prevCount) => prevCount + 5)
    }
  return (
    <div>
        Count: {count}<br />
        <button onClick={()=>setCount(initialCount)}>Reset Count</button>
        <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increament Counter</button>
        <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decreament Counter</button>
        <button onClick={increamentFive}> Increament Five</button>
    </div>
  )
}

export default HooksCounter_prevVal