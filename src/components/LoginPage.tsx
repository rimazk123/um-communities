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
        style={{ marginLeft: "auto" }}
        onClick={() => firebase.auth().signInWithRedirect(provider)}
      >
        Login with Google
      </Button>
    </>
  );
}
