import React from "react";
import { InputLabel, TextField, Button } from "@material-ui/core";

export default function CommunityForm() {
  return (
    <form style={{ marginBottom: "25px" }}>
      <TextField
        type="text"
        id="name"
        name="name"
        required
        variant="outlined"
        label="Community Name:"
      />
      <br />
      <br />
      <InputLabel htmlFor="email">E-mail:</InputLabel>
      <TextField
        type="email"
        id="email"
        name="email"
        required
        variant="outlined"
      />
      <br />
      <br />
      <InputLabel htmlFor="comment">Feedback:</InputLabel>
      <TextField
        type="text"
        multiline
        rows={4}
        id="comment"
        name="comment"
        variant="outlined"
        required
      />
      <br />
      <br />
      <Button variant="contained" color="primary" type="submit">
        Hi
      </Button>
    </form>
  );
}
