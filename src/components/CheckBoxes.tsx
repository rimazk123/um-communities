import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import styled from "styled-components";
import { platform } from "node:os";

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

const platformsDefault: { [key: string]: boolean } = {
  Facebook: false,
  Discord: false,
  Slack: false,
  Groupme: false,
  Other: false,
};

const labelsDefault: { [key: string]: boolean } = {
  Entrepreneurship: false,
  Engineering: false,
  Social: false,
  Gaming: false,
  Sports: false,
};

export default function CheckBoxes() {
  const [platforms, setPlatforms] = useState(platformsDefault);
  const [labels, setLabels] = useState(labelsDefault);

  const getPlatformClick = (platform: string) => {
    return () =>
      setPlatforms({ ...platforms, [platform]: !platforms[platform] });
  };

  const getLabelClick = (label: string) => {
    return () => setLabels({ ...labels, [label]: !labels[label] });
  };

  return (
    <Container>
      <StyledFormControl>
        <StyledLegend>Categories</StyledLegend>
        <FormGroup>
          {Object.keys(labelsDefault).map((label) => (
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
        <FormGroup>
          {Object.keys(platforms).map((platform) => (
            <StyledLabel
              control={<Checkbox name={platform} />}
              label={platform}
              key={platform}
              onChange={getPlatformClick(platform)}
            />
          ))}
        </FormGroup>
      </StyledFormControl>
    </Container>
  );
}
