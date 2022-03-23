import React, { useState } from "react";
import styled from "styled-components";

const InvalidInput = (props) => {
  const classes = "card " + props.className;

  return <CardComp className={classes}>This is invalid</CardComp>;
};

export default InvalidInput;

const CardComp = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
