import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Navbar from "./Navbar";
import CheckBoxes from "./CheckBoxes";
import styled from "styled-components";
import MuiTheme from "../utils/mui-theme";

const Container = styled.div`
  width: 90vw;
  max-width: 1450px;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
`;

export default function Main() {
  return (
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <CheckBoxes />
      </Container>
    </ThemeProvider>
  );
}
