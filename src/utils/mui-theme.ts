import { createMuiTheme } from "@material-ui/core";

const MuiTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#23272a",
    },
    primary: {
      main: "rgb(42, 94, 232)",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Lato", "Sans Serif"].join(","),
    h2: {
      fontWeight: 600,
      letterSpacing: "-1px",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: "0px",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: "0px",
      },
    },
  },
});

MuiTheme.spacing(2);

export default MuiTheme;
