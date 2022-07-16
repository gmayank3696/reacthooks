import React, { useState } from 'react'
import Effect_once from './Effect_once'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <React.Fragment>
        <button onClick={()=> setDisplay(!display)}>Toggle Mouse Logger</button>
        {display && <Effect_once />}
    </React.Fragment>
  )
}

export default MouseContainer