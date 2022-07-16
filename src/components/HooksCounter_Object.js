import React from "react";
import { useState } from "react";
function HooksCounter_Object() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const handleFirstNameChange = (prevVal, e) => {
    return {firstName: e.target.value, lastName: prevVal.lastName }
  }

  const handleLastNameChange = (prevVal, e) => {
    return {firstName: prevVal.firstName, lastName: e.target.value}
  }
  return (
    <React.Fragment>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName((prevVal)=> handleFirstNameChange(prevVal, e))}
        />

        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName((prevVal)=> handleLastNameChange(prevVal, e))}
        />
        <h2>Your filled First Name: - {name.firstName}</h2>
        <h2>Your filled Last Name: - {name.lastName}</h2>
      </form>
    </React.Fragment>
  );
}

export default HooksCounter_Object;
