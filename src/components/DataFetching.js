import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("fetching data")
    let result = axios.get("http://localhost:9000/crud/users/")

    console.log(result);

    result.then(res => {
        console.log(res.data);
        setUsers(res.data)
    }).catch(
        err => {console.log(err)}
    )
  },[])
  return (
    <div>
      <ul>
        {
            users.map(user => <li key={user.User_ID}>{user.User_name}</li>)
        }
      </ul>
     </div>
  );
}

export default DataFetching;