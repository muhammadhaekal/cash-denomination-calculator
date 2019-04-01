import React, { Component } from "react";
import styled from "styled-components";
import CoinImg from "../img/coins.png";
import MoneyImg from "../img/money-stack.png";

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

const CheckboxesContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "25% 25% 25% 25%"
});

const CheckboxContainer = styled.span({
  display: "flex",
  alignItems: "center",
  marginTop: "5px"
});

class Calculator extends Component {
  state = {
    amount: 0,
    100000: true
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
          <CheckboxesContainer>
            <CheckboxContainer>
              <img src={MoneyImg} alt="money-stack" />
              <span>Rp.100.000</span>
            </CheckboxContainer>
            <CheckboxContainer>
              <img src={MoneyImg} alt="money-stack" />
              <span>Rp.50.000</span>
            </CheckboxContainer>
            <CheckboxContainer>
              <img src={MoneyImg} alt="money-stack" />
              <span>Rp.20.000</span>
            </CheckboxContainer>
            <CheckboxContainer>
              <img src={MoneyImg} alt="money-stack" />
              <span>Rp.10.000</span>
            </CheckboxContainer>
            <CheckboxContainer>
              <img src={MoneyImg} alt="money-stack" />
              <span>Rp.5.000</span>
            </CheckboxContainer>
            <CheckboxContainer>
              <img src={MoneyImg} alt="money-stack" />
              <span>Rp.1.000</span>
            </CheckboxContainer>
            <CheckboxContainer>
              <img src={CoinImg} alt="coins" />
              <span>Rp.100</span>
            </CheckboxContainer>
            <CheckboxContainer>
              <img src={CoinImg} alt="coins" />
              <span>Rp.50</span>
            </CheckboxContainer>
          </CheckboxesContainer>
        </FormContainer>
        <ResultContainer>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          quisquam deleniti harum. Eveniet neque sit corporis temporibus quia.
          Necessitatibus, magnam perferendis? Hic ratione perspiciatis
          distinctio, incidunt numquam pariatur molestiae voluptatibus.
        </ResultContainer>
        <button />
      </CalcContainer>
    );
  }
}

export default Calculator;
