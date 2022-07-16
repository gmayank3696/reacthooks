import React, {useState}from 'react'

function HookCounter() {

 const [count, setCount] = useState(0)

  return (
    <React.Fragment>
        <button onClick={() => setCount(count + 1)}> Click Counter : {count}</button>
    </React.Fragment>
  )
}

export default HookCounter