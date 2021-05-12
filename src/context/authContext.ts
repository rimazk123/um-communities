import React from "react";
import { AuthedUser } from "../types/types";

interface authContextTypes {
  currentUser: AuthedUser;
  isUserAuthed: () => boolean;
}

const authContext = React.createContext<authContextTypes>({
  currentUser: null,
  isUserAuthed: () => false,
});

export default authContext;
