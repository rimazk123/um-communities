import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Navbar from "./components/Navbar";
import CheckBoxes from "./components/Homepage";
import CommunityForm from "./components/CommunityForm";
import styled from "styled-components";
import MuiTheme from "./utils/mui-theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        <BrowserRouter>
          <Switch>
            <Route path="/community" component={CommunityForm} />
            <Route path="/" component={CheckBoxes} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}
