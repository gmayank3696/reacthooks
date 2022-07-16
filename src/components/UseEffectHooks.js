import React, {useState, useEffect } from 'react'

function UseEffectHooks() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Counter Status ${count}`
  })
  return (
    <button onClick={() => setCount(prevVal => prevVal + 1)}>Counter Status {count} </button>
  )
}

export default UseEffectHooks