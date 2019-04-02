import React from "react";
import MoneyImg from "../img/money-stack.png";
import styled from "styled-components";

const formatNumToStr = number => {
  number = number.toString().split("");
  if (number.length > 3 && number[0] !== "l") {
    number.splice(number.length - 3, 0, ".");
    number = number.join("");
    return `Rp.${number}`;
  } else if (!isNaN(number.join(""))) {
    number = number.join("");
    return `Rp.${number}`;
  } else {
    number = number.join("");
    return number;
  }
};

const Result = ({ result, error }) => {
  return (
    <ResultContainer>
      <ResultHeading>Result</ResultHeading>
      {error ? <WarningText>{error}</WarningText> : null}
      <ResultList>
        {result.map(({ denomination, quantity }, i) => {
          if (quantity > 0) {
            return (
              <ListContainer key={i}>
                <img src={MoneyImg} alt="coins" />
                {`${formatNumToStr(denomination)} x ${quantity}`}
              </ListContainer>
            );
          }
        })}
      </ResultList>
    </ResultContainer>
  );
};

const ResultContainer = styled.div({
  padding: "20px"
});

const ResultHeading = styled.h2({
  textAlign: "center"
});

const ResultList = styled.div({});
const ListContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: "8px 0"
});

const WarningText = styled.h4({
  color: "red",
  textAlign: "center"
});

export default Result;
