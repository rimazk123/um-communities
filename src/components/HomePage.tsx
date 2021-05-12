import React, { useState, useContext } from "react";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import CardGrid from "./CardGrid";
import LoginPage from "./LoginPage";
import { labelTypes, platformTypes } from "../utils/constants";
import { Filters } from "../utils/types";
import { firebase } from "../utils/firebaseSetup";
import AuthContext from "../context/authContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 175px;
  @media (max-width: 650px) {
    width: 80%;
    border-left: 0px;
  }
  margin: 2vw;
  margin-left: 10%;
`;

const CheckboxContainer = styled.div``;

const TopContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;
  padding: 10px;
  width: 90%;
  max-width: 1150px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const StyledLegend = styled(FormLabel)`
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledLabel = styled(FormControlLabel)`
  margin-bottom: -15px;
`;

export default function HomePage(): JSX.Element {
  const [filters, setFilters] = useState<Filters>({
    platforms: [],
    categories: [],
  });
  const authContext = useContext(AuthContext);

  const getPlatformClick = (platform: string) => () => {
    if (filters.platforms?.includes(platform)) {
      setFilters({
        ...filters,
        platforms: filters.platforms.filter((p) => p !== platform),
      });
    } else {
      setFilters({
        ...filters,
        platforms: [...filters.platforms, platform],
      });
    }
  };

  const getLabelClick = (category: string) => () => {
    if (filters.categories?.includes(category)) {
      setFilters({
        ...filters,
        categories: filters.categories.filter((c) => c !== category),
      });
    } else {
      setFilters({
        ...filters,
        categories: [...filters.categories, category],
      });
    }
  };

  const renderHeader = (): JSX.Element => {
    const button = (
      <Button
        variant='contained'
        color='secondary'
        size='small'
        style={{ marginLeft: "auto", boxShadow: "none", borderRadius: "0px", maxHeight: "30px" }}
        onClick={() => firebase.auth().signOut()}
      >
        Logout
      </Button>
    );
    if (authContext.isUserAuthed()) {
      return button;
    }
    if (authContext.currentUser) {
      return (
        <>
          {button}
          <p>
            It looks like you are logged in with a non-umich email -- please log in with a umich
            email to access community links
          </p>
        </>
      );
    }
    return (
      <>
        <LoginPage />
        <p>
          In order to protect communities from spam, we request that you log in with your umich
          google account to access community links.
        </p>
      </>
    );
  };

  return (
    <PageContainer>
      <TopContainer>{renderHeader()}</TopContainer>
      <InnerContainer>
        <Container>
          <CheckboxContainer>
            <StyledFormControl>
              <StyledLegend>Categories</StyledLegend>
              <FormGroup row={window.innerWidth <= 650}>
                {labelTypes.map((label) => (
                  <StyledLabel
                    control={<Checkbox name={label} />}
                    label={label}
                    key={label}
                    onChange={getLabelClick(label)}
                  />
                ))}
              </FormGroup>
            </StyledFormControl>
            <StyledFormControl>
              <StyledLegend>Platform</StyledLegend>
              <FormGroup row={window.innerWidth <= 650}>
                {platformTypes.map((platform) => (
                  <StyledLabel
                    control={<Checkbox name={platform} />}
                    label={platform}
                    key={platform}
                    onChange={getPlatformClick(platform)}
                  />
                ))}
              </FormGroup>
            </StyledFormControl>
          </CheckboxContainer>
        </Container>
        <CardGrid filters={filters} />
      </InnerContainer>
    </PageContainer>
  );
}
