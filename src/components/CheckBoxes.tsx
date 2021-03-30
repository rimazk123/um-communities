import React from "react";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
`;
const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const StyledLegend = styled(FormLabel)`
  font-weight: bold;
  color: #262626;
  margin-bottom: 10px;
`;

const StyledLabel = styled(FormControlLabel)`
  margin-bottom: -15px;
`;

const platforms = ["Facebook", "Discord", "Slack", "Groupme"];

const labels = [
  "Entrepreneurship",
  "Engineering",
  "Software Development",
  "Social",
  "Gaming",
  "Sports",
];

export default function CheckBoxes() {
  return (
    <Container>
      <StyledFormControl>
        <StyledLegend>Categories</StyledLegend>
        <FormGroup>
          {labels.map((label) => (
            <StyledLabel
              control={<Checkbox name={label} />}
              label={label}
              key={label}
            />
          ))}
        </FormGroup>
      </StyledFormControl>
      <StyledFormControl>
        <StyledLegend>Platform</StyledLegend>
        <FormGroup>
          {platforms.map((platform) => (
            <StyledLabel
              control={<Checkbox name={platform} />}
              label={platform}
              key={platform}
            />
          ))}
        </FormGroup>
      </StyledFormControl>
    </Container>
  );
}
