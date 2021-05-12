import React from "react";
import { AuthedUser } from "../utils/types";

interface authContextTypes {
  currentUser: AuthedUser;
  isUserAuthed: () => boolean;
}

const authContext = React.createContext<authContextTypes>({
  currentUser: null,
  isUserAuthed: () => false,
});

export default authContext;
