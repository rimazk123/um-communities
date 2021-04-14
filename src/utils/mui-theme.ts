import { createMuiTheme } from "@material-ui/core";

const MuiTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#292929",
    },
    primary: {
      main: "rgb(42, 94, 232)",
    },
  },
  typography: {
    fontFamily: ["Lato", "Sans Serif"].join(","),
    h2: {
      fontWeight: 600,
      letterSpacing: "-1px",
    },
  },
});

MuiTheme.spacing(2);

export default MuiTheme;
