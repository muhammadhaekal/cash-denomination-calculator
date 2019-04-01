import React, { Component } from "react";
import styled from "styled-components";
import Denominations from "./Denominations";

class Calculator extends Component {
  state = {
    amount: 0
  };

  handleOnChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
        <SubmitButton>Submit</SubmitButton>
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
