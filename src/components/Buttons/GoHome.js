import React from "react";
import { useHistory } from "react-router";
import { Button } from "./GoHomeStyle";

const GoHomeButton = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };
  return <Button onClick={() => handleClick()}>Home</Button>;
};

export default GoHomeButton;
