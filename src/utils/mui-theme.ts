import { createMuiTheme } from "@material-ui/core";

const MuiTheme = createMuiTheme({
  typography: {
    fontFamily: ["Noto Sans", "Sans Serif"].join(","),
    h2: {
      fontWeight: 600,
      letterSpacing: "-2px",
    },
  },
});

MuiTheme.spacing(2);

export default MuiTheme;
