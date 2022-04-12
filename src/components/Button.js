import React, { useState } from "react";
import styled from "styled-components";

const Button = (props) => {
  const classes = "button" + props.className;

  return (
    <ButtonComp onClick={props.onClick} type={props.type} className={classes}>
      {props.children}
    </ButtonComp>
  );
};

export default Button;

// &:active
const ButtonComp = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;
  &:hover {
    background: red;
    border-color: #red;
  }
  &:focus {
    outline: none;
  }
`;
