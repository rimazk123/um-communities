import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Navbar from "./Navbar";
import CheckBoxes from "./CheckBoxes";
import CommunityCard from "./CommunityCard";
import styled from "styled-components";
import { useCommunities } from "../utils/hooks";
import MuiTheme from "../utils/mui-theme";

const Container = styled.div`
  width: 90vw;
  max-width: 1150px;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
`;

let filters = {platform: "discord"};

export default function Main() {
  const [filter, setFilter] = useState({}); 
  console.log(useCommunities(filter));
  console.log("rerender");
  return (
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <CheckBoxes />
        <CommunityCard
          community="U-M EECS"
          platform="discord"
          image="https://brand.umich.edu/assets/brand/style-guide/logo-guidelines/U-M_Logo-Hex.png"
        />
      </Container>
    </ThemeProvider>
  );
}
