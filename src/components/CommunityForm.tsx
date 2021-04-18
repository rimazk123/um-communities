import React, { useState } from "react";
import styled from "styled-components";
import { platformTypes, labelTypes } from "../utils/constants";
import db from "../utils/firebaseSetup";
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

const StyledForm = styled.form`
  margin-bottom: 25px;
  width: min(90vw, 550px);
  margin: auto;
`;

export default function CommunityForm() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [platform, setPlatform] = useState("Discord");
  const [categories, setCategories] = useState<string[]>([]);
  const [submitMessage, setSubmitMessage] = useState("");

  const onCategoryChange = (category: string) => {
    return () => {
      if (categories.includes(category)) {
        setCategories(categories.filter((c) => c !== category));
      } else {
        setCategories([...categories, category]);
      }
    };
  };

  const submitCommunity = async () => {
    try {
      await db.collection("submitted-communities").add({
        name: name,
        url: link,
        type: platform,
        categories: categories,
        desc: desc,
      });
      setSubmitMessage("Your submission was successful!");
    } catch (e) {
      setSubmitMessage("There was an issue with your submission :(");
    }
    setTimeout(() => setSubmitMessage(""), 2000);
    setName("");
    setLink("");
    setDesc("");
    setPlatform("Discord");
    setCategories([]);
  };

  // useEffect(() => {
  //   console.log(platform);
  // }, [platform])

  return (
    <>
      {submitMessage !== "" ? (
        <p>{submitMessage}</p>
      ) : (
        <StyledForm>
          <Typography>
            We manually review and approve all submitted communities, so expect
            a 1-2 day delay before it shows up
          </Typography>
          <FormControl fullWidth margin="normal">
            <TextField
              type="text"
              id="name"
              name="name"
              variant="outlined"
              label="Community Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <br />
            <TextField
              type="link"
              id="link"
              name="link"
              label="Link"
              helperText="Please make sure your link is set to never expire!"
              variant="outlined"
              onChange={(e) => setLink(e.target.value)}
              inputProps={{ maxLength: 200 }}
              value={link}
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
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              inputProps={{ maxLength: 200 }}
              required
            />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="platform">Platform</InputLabel>
              <Select
                name="platform"
                label="platform"
                id="platform"
                required
                value={platform}
                onChange={(e) => setPlatform(e.target.value as string)}
              >
                {platformTypes.map((p) => (
                  <MenuItem value={p} key={p}>
                    {p}
                  </MenuItem>
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
                    onChange={onCategoryChange(platform)}
                  />
                ))}
              </FormGroup>
            </FormControl>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={submitCommunity}
            >
              Submit
            </StyledButton>
          </FormControl>
        </StyledForm>
      )}
    </>
  );
}
