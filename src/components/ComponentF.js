import React from 'react'
import { UserContext } from '../App'


function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return <div>User Logged in : {user}</div>
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF