import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";

const InvalidInput = (props) => {
  return (
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p></p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default InvalidInput;
