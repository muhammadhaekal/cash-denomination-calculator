import React, { Component } from "react";
import styled from "styled-components";
import Denominations from "./Denominations";
import MoneyImg from "../img/money-stack.png";

class Calculator extends Component {
  state = {
    amount: "Rp002.000",
    result: [],
    error: null
  };

  handleOnChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    let amount = this.state.amount;
    let denominations = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];

    try {
      // Check and Reformat User Input
      amount = this.formatAndCheckInput(amount);

      //Calculate Result
      let result = [];
      denominations.forEach(denomination => {
        const quantity = Math.floor(amount / denomination);
        result.push({ denomination, quantity });
        amount -= quantity * denomination;
      });

      result.push({ denomination: "left", quantity: amount });

      // SetState
      this.setState({
        result
      });
    } catch (err) {
      this.setState({
        error: err.message
      });
    }
  };

  formatAndCheckInput = amount => {
    this.setState({
      error: null
    });
    const lastThreeChar = amount.substring(amount.length - 3, amount.length);

    // If the last substring is ",00" remove it
    if (lastThreeChar === ",00") {
      amount = amount.slice(0, amount.length - 3);
    }

    // If theres "," after ",00" removed then error
    if (amount.includes(",")) {
      throw new Error("invalid format");
    }

    // Remove Rp from beginning of the string
    if (amount.substr(0, 2) === "Rp") {
      amount = amount.slice(2, amount.length);
    }

    // If theres "Rp" after "Rp" removed from the beginning of the string then error
    if (amount.includes("Rp")) {
      throw new Error("invalid format");
    }

    // The beginning of the string must be a number
    if (isNaN(amount[0])) {
      throw new Error("invalid format");
    }

    // Remove leading zero from string
    if (amount[0] === "0") {
      amount = amount.replace(/^0+/, "");
    }

    // Check "." separator
    if (amount.includes(".")) {
      const reversedArr = amount.split("").reverse();
      reversedArr.forEach((char, i) => {
        if ((i + 1) % 4 === 0 && char !== "." && !isNaN(char)) {
          throw new Error("invalid format");
        }
      });
    }

    // remove space, dot, and Rp before convert to number
    amount = amount.replace(/[#_.Rp ]/g, "");

    return amount;
  };

  formatNumToStr = number => {
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

  render() {
    const { amount, result } = this.state;
    return (
      <CalcContainer>
        <div>
          <FormContainer>
            <DetailInput>Amount</DetailInput>
            <CashInput
              type="text"
              name="amount"
              value={amount}
              onChange={this.handleOnChange}
            />
            <DetailInput>Denominations</DetailInput>
            <Denominations />
          </FormContainer>
          <ButtonContainer>
            <SubmitButton onClick={this.handleSubmit}>Submit</SubmitButton>
          </ButtonContainer>
        </div>
        <ResultContainer>
          <ResultHeading>Result</ResultHeading>
          {this.state.error ? (
            <WarningText>{this.state.error}</WarningText>
          ) : null}
          <ResultList>
            {result.map(({ denomination, quantity }, i) => {
              if (quantity > 0) {
                return (
                  <ListContainer key={i}>
                    <img src={MoneyImg} alt="coins" />
                    {`${this.formatNumToStr(denomination)} x ${quantity}`}
                  </ListContainer>
                );
              }
            })}
          </ResultList>
        </ResultContainer>
      </CalcContainer>
    );
  }
}

// ------------------------------- Styled Components --------------------------------------------

const CalcContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "50% 50%"
});

const FormContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "30% 70%",
  padding: "20px"
});

const CashInput = styled.input({
  borderRadius: "10px",
  border: "2px solid grey",
  marginBottom: "10px",
  paddingLeft: "10px"
});

const DetailInput = styled.h3({
  margin: "10px 0"
});

const ResultContainer = styled.div({
  padding: "20px"
});

const SubmitButton = styled.button({
  fontWeight: "bolder",
  width: "100%",
  marginLeft: "20px",
  marginRight: "20px",
  padding: "7px"
});

const ResultHeading = styled.h2({
  textAlign: "center"
});

const ResultList = styled.div({});

const ButtonContainer = styled.div({
  display: "flex",
  justifyContent: "center"
});

const ListContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: "8px 0"
});

const WarningText = styled.h4({
  color: "red",
  textAlign: "center"
});
export default Calculator;
