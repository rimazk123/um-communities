import React from 'react';
import styled from 'styled-components';
import { AppBar, Link, Typography } from '@material-ui/core';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(90deg, rgba(42, 94, 232, 1) 17%, rgba(113, 150, 255, 1) 100%);
  height: 200px;
  width: 100vw;
  padding: 20px 40px;
  box-shadow: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 650px) {
    height: 150px;
  }
`;

const TextWrapper = styled.div`
  width: 90vw;
  max-width: 1250px;
`;

const Container = styled.div`
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  margin-left: auto;
  @media (max-width: 650px) {
    margin-left: 0px;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 8px;
`;

export default function Navbar() {
  return (
    <StyledAppBar position='static'>
      <TextWrapper>
        <StyledLink href='/' color='textPrimary' underline='none'>
          <Typography variant={window.innerWidth >= 650 ? 'h2' : 'h5'}>Communities @ U-M</Typography>
        </StyledLink>
        <Container>
          <Typography style={{ marginLeft: '10px' }}>Find Discord servers, Slacks, and more at Michigan!</Typography>
          <LeftSide>
            <StyledLink color='textPrimary' href='/community'>
              Add a Community
            </StyledLink>
            |
            <StyledLink color='textPrimary' href='/issues'>
              Report an Issue
            </StyledLink>
          </LeftSide>
        </Container>
      </TextWrapper>
    </StyledAppBar>
  );
}
