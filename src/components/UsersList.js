import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

function UsersList(props) {
  return (
    <Card>
      <List>
        {props.users.map((user) => (
          <Person key={user.id}>
            {user.name}
            {user.age}
          </Person>
        ))}
      </List>
    </Card>
  );
}
export default UsersList;

const List = styled.ul`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
  list-style: none;
  padding: 1rem;
`;

const Person = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;
