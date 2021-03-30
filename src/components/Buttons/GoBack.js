import React from "react";
import { useHistory } from "react-router";
import { Button } from "./GoBackStyle";

const GoBackButton = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/${props.route}`);
  };
  return <Button onClick={() => handleClick()}>Back</Button>;
};

export default GoBackButton;
