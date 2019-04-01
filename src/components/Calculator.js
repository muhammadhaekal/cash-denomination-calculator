import React, { Component } from "react";
import styled from "styled-components";
import Denominations from "./Denominations";

class Calculator extends Component {
  state = {
    amount: "Rp002.000",
    result: null
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
    let error;
    const lastThreeChar = amount.substring(amount.length - 3, amount.length);

    // If the last substring is ",00" remove it
    if (lastThreeChar === ",00") {
      amount = amount.slice(0, amount.length - 3);
    }

    // If theres "," after ",00" removed then error
    if (amount.includes(",")) {
      error = "invalid separator";
    }

    // Remove Rp from beginning of the string
    if (amount.substr(0, 2) === "Rp") {
      amount = amount.slice(2, amount.length);
    }

    // If theres "Rp" after "Rp" removed from the beginning of the string then error
    if (amount.includes("Rp")) {
      error = "invalid separator";
    }

    // The beginning of the string must be a number
    if (isNaN(amount[0])) {
      error = "invalid separator";
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
          error = "invalid separator";
        }
      });
    }

    console.log(amount);
    console.log(error);
    // remove space, dot, and Rp before convert to number
    console.log(amount.replace(/[#_.Rp ]/g, ""));
  };

  render() {
    return (
      <CalcContainer>
        <FormContainer>
          <DetailInput>Amount</DetailInput>
          <CashInput
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.handleOnChange}
          />
          <DetailInput>Denominations</DetailInput>
          <Denominations />
        </FormContainer>
        <ResultContainer>
          <ResultHeading>Result</ResultHeading>
          <ResultList>
            <div>1</div>
            <div>2</div>
          </ResultList>
        </ResultContainer>
        <SubmitButton onClick={this.handleSubmit}>Submit</SubmitButton>
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
  margin: "0 20px",
  padding: "7px"
});

const ResultHeading = styled.h2({
  textAlign: "center"
});

const ResultList = styled.div({});

export default Calculator;
