import React, { Component } from "react";
import styled from "styled-components";

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
  border: "2px solid black"
});

const DetailInput = styled.h3({
  margin: "10px 0"
});

const ResultContainer = styled.div({
  padding: "20px"
});

const CheckboxesContainer = styled.div({
  border: "2px solid black",
  display: "grid",
  gridTemplateColumns: "25% 25%"
});

class Calculator extends Component {
  render() {
    return (
      <CalcContainer>
        <FormContainer>
          <DetailInput>Amount</DetailInput>
          <CashInput type="text" />
          <DetailInput>Denominations</DetailInput>
          <CheckboxesContainer>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            sapiente obcaecati fuga, necessitatibus sequi totam rem incidunt,
            libero maxime nesciunt officia quam optio odio quisquam, ea dicta.
            Enim, incidunt maiores!
          </CheckboxesContainer>
        </FormContainer>
        <ResultContainer>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          quisquam deleniti harum. Eveniet neque sit corporis temporibus quia.
          Necessitatibus, magnam perferendis? Hic ratione perspiciatis
          distinctio, incidunt numquam pariatur molestiae voluptatibus.
        </ResultContainer>
      </CalcContainer>
    );
  }
}

export default Calculator;
