import React from "react";
import styled from "styled-components";
import { AppBar, Link, Typography, Tooltip } from "@material-ui/core";

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

interface NavbarProps {
  isUserLoggedIn: boolean;
}

interface ConditionProp {
  condition: boolean;
  title: string;
  children: JSX.Element;
}

const ConditionalTooltip = ({ condition, title, children }: ConditionProp) =>
  condition ? (
    <Tooltip title={title} placement='top'>
      {children}
    </Tooltip>
  ) : (
    children
  );

export default function Navbar({ isUserLoggedIn }: NavbarProps): JSX.Element {
  return (
    <StyledAppBar position='static'>
      <TextWrapper>
        <StyledLink href='/' color='textPrimary' underline='none'>
          <Typography variant={window.innerWidth >= 650 ? "h2" : "h5"}>
            Communities @ U-M
          </Typography>
        </StyledLink>
        <Container>
          <Typography style={{ marginLeft: "10px" }}>
            Find Discord servers, Slacks, and more at Michigan!
          </Typography>
          <LeftSide>
            <ConditionalTooltip title='Log in to add a community' condition={!isUserLoggedIn}>
              <StyledLink color='textPrimary' href={isUserLoggedIn ? "/community" : undefined}>
                Add a Community
              </StyledLink>
            </ConditionalTooltip>
            |
            <ConditionalTooltip title='Log in to report an issue' condition={!isUserLoggedIn}>
              <StyledLink color='textPrimary' href={isUserLoggedIn ? "/issues" : undefined}>
                Report an Issue
              </StyledLink>
            </ConditionalTooltip>
          </LeftSide>
        </Container>
      </TextWrapper>
    </StyledAppBar>
  );
}
