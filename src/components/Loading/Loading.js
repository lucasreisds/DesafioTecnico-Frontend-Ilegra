import React from "react";
import loading from "../../assets/images/bb8Loading-3.gif.gif";
import { LoadContainer, ImgLoading, TextLoading } from "./LoadingStyle";
const Loading = () => {
  return (
    <LoadContainer>
      <ImgLoading src={loading} />
      <TextLoading>Loading...</TextLoading>
    </LoadContainer>
  );
};

export default Loading;
