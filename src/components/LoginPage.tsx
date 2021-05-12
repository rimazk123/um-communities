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
        variant='contained'
        color='secondary'
        size='small'
        style={{ marginLeft: "auto", boxShadow: "none", borderRadius: "0px", maxHeight: "30px" }}
        onClick={() => firebase.auth().signInWithRedirect(provider)}
      >
        Login with Google
      </Button>
    </>
  );
}
