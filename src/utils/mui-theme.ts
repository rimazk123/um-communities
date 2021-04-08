import { createMuiTheme } from "@material-ui/core";

const MuiTheme = createMuiTheme({
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
