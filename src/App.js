import React, { Component } from "react";
import styled from "styled-components";
import Calculator from "./components/Calculator";

class App extends Component {
  render() {
    return (
      <Container>
        <AppTitle>Cash Denomination Calculator</AppTitle>
        <Calculator />
      </Container>
    );
  }
}

export default App;

const Container = styled.div({
  margin: "0 15%"
});

const AppTitle = styled.h1({
  textAlign: "center"
});
