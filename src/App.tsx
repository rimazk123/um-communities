import React, { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import CommunityForm from "./components/CommunityForm";
import { CircularProgress, Button } from "@material-ui/core";
import styled from "styled-components";
import MuiTheme from "./utils/mui-theme";
import { firebase } from "./utils/firebaseSetup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthedUser } from "./utils/types";

const Container = styled.div`
  width: 90vw;
  max-width: 1450px;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  min-height: calc(100vh - 240px);
`;

export default function Main() {
  const [user, setUser] = useState<AuthedUser>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      console.log(user?.email);
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        console.log("start");
        setUser(null);
      }
    });
  });

  const renderPage = () => {
    if (loading) return <CircularProgress />;
    else if (user && user.email!.slice(-9) === "umich.edu")
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/community" component={CommunityForm} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      );
    else if (user)
      return (
        <>
          <p>User not authorized</p>
          <Button onClick={() => firebase.auth().signOut()}>Logout</Button>
        </>
      );
    else return <LoginPage user={user} />;
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <Navbar />
      <Container>{renderPage()}</Container>
    </ThemeProvider>
  );
}
