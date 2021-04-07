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
import { Icon, IconifyIcon, InlineIcon } from "@iconify/react";
import discordIcon from "@iconify-icons/mdi/discord";

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
  border-bottom: 1px solid gray;
`;

const StyledIcon = styled(Icon)`
  height: 24px;
  width: 24px;
  margin-left: auto;
  margin-right: 5px;
`;

const iconMappings: any = {
  Discord: discordIcon,
};

export default function CommunityCard({ name, type, logo, url }: Community) {
  return (
    <StyledCard>
      <a href={url}>
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
      </a>
      <CardActions>
        <StyledIcon icon={iconMappings[type!]} height="24px" width="24px" />
      </CardActions>
    </StyledCard>
  );
}
