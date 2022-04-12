import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";
import InvalidInput from "./InvalidInput";

function UserInput(props) {
  const errorMessage = "Invalid input";
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1
    ) {
      setIsValid(false);
    }
    console.log(enteredName, enteredAge);
    props.onaddUser(enteredName, enteredAge);
    //so goes back to empty string after data name and age registere
    setEnteredName("");
    setEnteredAge("");
    // setEnteredValue(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          value={enteredName}
          onChange={usernameChangeHandler}
        />

        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          value={enteredAge}
          // onChange={(e) => setEnteredValue(e.currentTarget.value)}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>

      {!isValid && <InvalidInput title={errorMessage} />}
    </Card>
  );
}

export default UserInput;

const Input = styled.input`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
  &:focus {
    outline: none;
    border-color: #red;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
