import React from "react";
import { Button } from "@material-ui/core";
import { firebase } from "../utils/firebaseSetup";
import "firebase/auth";

export default function LoginPage(): JSX.Element {
  const provider = new firebase.auth.GoogleAuthProvider();
  return (
    <>
      {/* <Button onClick={() => firebase.auth().signOut()}>Logout</Button> */}
      <Button
        style={{ margin: "auto" }}
        color="primary"
        variant="contained"
        onClick={() => firebase.auth().signInWithRedirect(provider)}
      >
        Login with Google
      </Button>
    </>
  );
}
