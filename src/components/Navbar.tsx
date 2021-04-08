import React from "react";
import styled from "styled-components";
import { AppBar, Typography } from "@material-ui/core";

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(
    90deg,
    rgba(113, 150, 255, 1) 17%,
    rgba(42, 94, 232, 1) 100%
  );
  height: 200px;
  width: 100vw;
  padding: 20px 40px;
  box-shadow: none;
  border-bottom: 1px solid #d1d1d1;
  color: white;
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
        <Typography style={{ marginLeft: "10px" }}>
          Find Discord servers, Slacks, and more at Michigan!
        </Typography>
      </TextWrapper>
    </StyledAppBar>
  );
}
