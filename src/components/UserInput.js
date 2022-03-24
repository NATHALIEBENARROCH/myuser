import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import InvalidInput from "./InvalidInput";

function UserInput(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    enteredValue.trim().length === 0 ? setIsValid(false) : setIsValid(true);
    setEnteredValue(event.target.value);
    // props.addUser(event.target.value);
  };

  return (
    <Card className="userinput">
      <div className="border-solid border-2 border-red-600">
        <form className="flex-col" onSubmit={formSubmitHandler}>
          <label
            className="border-solid border-2 border-red-600"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={enteredValue}
            onChange={(e) => setEnteredValue(e.currentTarget.value)}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredValue}
            onChange={(e) => setEnteredValue(e.currentTarget.value)}
          />
        </form>
        <button type="submit">Add User</button>
      </div>
      {!isValid && <InvalidInput />}
    </Card>
  );
}

export default UserInput;
