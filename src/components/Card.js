import React, { useState } from "react";
import styled from "styled-components";

const Card = (props) => {
  const classes = "card " + props.className;

  return <CardComp className={classes}>{props.children}</CardComp>;
};

export default Card;

const CardComp = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;
