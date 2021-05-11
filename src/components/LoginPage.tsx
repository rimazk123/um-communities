import React from "react";
import { Button } from "@material-ui/core";
import { firebase } from "../utils/firebaseSetup";
import { AuthedUser } from "../utils/types";
import "firebase/auth";

interface IAuthedUser {
  user: AuthedUser;
}

export default function LoginPage({ user }: IAuthedUser) {
  const provider = new firebase.auth.GoogleAuthProvider();
  return (
    <>
      {/* <Button onClick={() => firebase.auth().signOut()}>Logout</Button> */}
      <Button
        style={{ margin: "auto" }}
        color='primary'
        variant='contained'
        onClick={() => firebase.auth().signInWithRedirect(provider)}
      >
        Login with Google
      </Button>
    </>
  );
}
