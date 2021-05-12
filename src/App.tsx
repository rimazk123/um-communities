import React, { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline, CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CommunityForm from "./components/CommunityForm";
import IssuesForm from "./components/IssuesForm";

import MuiTheme from "./utils/mui-theme";
import { firebase } from "./utils/firebaseSetup";
import AuthContext from "./context/authContext";
import { AuthedUser } from "./types/types";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding: 20px auto;
  min-height: calc(100vh - 200px);
  opacity: 0.8;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='pattern' width='34' height='34' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(130)'%3E%3Crect id='pattern-background' width='400%25' height='400%25' fill='rgba(35, 39, 42,1)' style='--darkreader-inline-fill:%231d1f21;'%3E%3C/rect%3E%3Cpath fill='rgba(45, 55, 72,1)' d='M0 29.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5zM0 69.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z' style='--darkreader-inline-fill:%231d1f21;'%3E%3C/path%3E%3Cpath fill='rgba(26, 32, 44,1)' d='M20 29.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z' style='--darkreader-inline-fill:%23d2cec8;'%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23pattern)' height='100%25' width='100%25'%3E%3C/rect%3E%3C/svg%3E");
`;

export default function Main(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<AuthedUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
  });

  const isUserAuthed = (): boolean => currentUser?.email?.slice(-9) === "umich.edu";

  const renderPage = () => {
    if (loading) return <CircularProgress style={{ margin: "auto" }} />;
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/community' component={CommunityForm} />
          <Route path='/issues'>
            <IssuesForm user={currentUser} />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AuthContext.Provider value={{ currentUser, isUserAuthed }}>
        <CssBaseline />
        <Navbar />
        <Container>{renderPage()}</Container>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
