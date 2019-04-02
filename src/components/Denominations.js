import React from "react";
import styled from "styled-components";
import MoneyImg from "../img/money-stack.png";

const Denominations = () => {
  return (
    <DenominationsContainer>
      <DenominationContainer>
        <img src={MoneyImg} alt="money-stack" />
        <span>Rp.100.000</span>
      </DenominationContainer>
      <DenominationContainer>
        <img src={MoneyImg} alt="money-stack" />
        <span>Rp.50.000</span>
      </DenominationContainer>
      <DenominationContainer>
        <img src={MoneyImg} alt="money-stack" />
        <span>Rp.20.000</span>
      </DenominationContainer>
      <DenominationContainer>
        <img src={MoneyImg} alt="money-stack" />
        <span>Rp.10.000</span>
      </DenominationContainer>
      <DenominationContainer>
        <img src={MoneyImg} alt="money-stack" />
        <span>Rp.5.000</span>
      </DenominationContainer>
      <DenominationContainer>
        <img src={MoneyImg} alt="money-stack" />
        <span>Rp.1.000</span>
      </DenominationContainer>
      <DenominationContainer>
        <img src={MoneyImg} alt="coins" />
        <span>Rp.100</span>
      </DenominationContainer>
      <DenominationContainer>
        <img src={MoneyImg} alt="coins" />
        <span>Rp.50</span>
      </DenominationContainer>
    </DenominationsContainer>
  );
};

// ------------------------------- Styled Components --------------------------------------------

const DenominationsContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "25% 25% 25% 25%"
});

const DenominationContainer = styled.span({
  display: "flex",
  alignItems: "center",
  marginTop: "5px"
});

export default Denominations;
