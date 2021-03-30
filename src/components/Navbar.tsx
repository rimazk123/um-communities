import React from "react";
import styled from "styled-components";
import { AppBar, Typography } from "@material-ui/core";

const StyledAppBar = styled(AppBar)`
  background-color: white;
  height: 200px;
  width: 100vw;
  padding: 20px 40px;
  box-shadow: none;
  border-bottom: 1px solid #d1d1d1;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TextWrapper = styled.div`
  width: 90vw;
  max-width: 1250px;
`;

export default function Navbar() {
  return (
    <StyledAppBar position="static">
      <TextWrapper>
        <Typography variant="h2">Communities @ U-M</Typography>
      </TextWrapper>
    </StyledAppBar>
  );
}
