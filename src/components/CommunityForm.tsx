import React from "react";
import styled from "styled-components";
import { platformTypes, labelTypes } from "../utils/constants";
import {
  InputLabel,
  TextField,
  Button,
  FormControl,
  Typography,
  Select,
  MenuItem,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

const StyledButton = styled(Button)`
  box-shadow: none;
  width: 175px;
  margin: auto;
  margin-top: 40px;
  border-radius: 0px;
`;

export default function CommunityForm() {
  return (
    <form style={{ marginBottom: "25px", width: "550px", margin: "auto" }}>
      <Typography>
        We manually review and approve all submitted communities, so expect a
        1-2 day delay before it shows up
      </Typography>
      <FormControl fullWidth margin="normal" style={{ borderRadius: "none" }}>
        <TextField
          type="text"
          id="name"
          name="name"
          variant="outlined"
          label="Community Name"
          required
        />
        <br />
        <TextField
          type="link"
          id="link"
          name="link"
          label="Discord Link"
          helperText="Please make sure your link is set to never expire!"
          variant="outlined"
          required
        />
        <br />
        <TextField
          type="text"
          multiline
          rows={3}
          id="description"
          helperText="200 character limit"
          name="description"
          variant="outlined"
          label="Community Description"
          required
        />
        <br />
        <FormControl variant="outlined">
          <InputLabel htmlFor="platform">Platform</InputLabel>
          <Select name="platform" label="platform" id="platform" required>
            {platformTypes.map((platform) => (
              <MenuItem>{platform}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Categories</FormLabel>
          <FormGroup row>
            {labelTypes.map((platform) => (
              <FormControlLabel
                style={{ marginRight: "10px" }}
                control={<Checkbox name={platform} />}
                label={platform}
                key={platform}
              />
            ))}
          </FormGroup>
        </FormControl>
        <StyledButton variant="contained" color="primary" type="submit">
          Submit
        </StyledButton>
      </FormControl>
    </form>
  );
}
