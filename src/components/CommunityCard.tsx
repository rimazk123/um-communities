import React from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Community } from "../utils/types";

const StyledCard = styled(Card)`
  width: 256px;
  margin: 10px 20px;
  box-shadow: none;
  border: 1px solid darkgray;
  border-radius: 10px;
`;

const StyledMedia = styled(CardMedia)`
  height: 256px;
  background-size: cover;
`;

export default function CommunityCard({ name, type, logo }: Community) {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledMedia image={logo} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Here is a description of the community.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </StyledCard>
  );
}
