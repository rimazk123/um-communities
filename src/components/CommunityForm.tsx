import React from "react";
import styled from "styled-components";
import { InputLabel, TextField, Button, FormControl } from "@material-ui/core";

const StyledButton = styled(Button)`
  box-shadow: none;
  border-radius: 0px;
`;

export default function CommunityForm() {
  return (
    <form style={{ marginBottom: "25px", width: "650px", margin: "auto" }}>
      <FormControl fullWidth margin="normal" style={{ borderRadius: "none" }}>
        <TextField
          type="text"
          id="name"
          name="name"
          required
          variant="outlined"
          label="Community Name"
        />
        <TextField
          type="email"
          id="email"
          name="email"
          required
          variant="outlined"
        />
        <TextField
          type="text"
          multiline
          rows={4}
          id="comment"
          name="comment"
          variant="outlined"
          label="Community Description"
          required
        />
        <StyledButton variant="contained" color="primary" type="submit">
          Hi
        </StyledButton>
      </FormControl>
    </form>
  );
}
