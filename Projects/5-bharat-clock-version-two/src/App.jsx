import React, { useState } from "react";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <center>
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </center>
    </Container>
  );
}

export default App;
