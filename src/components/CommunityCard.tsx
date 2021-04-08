import React from "react";
import styled from "styled-components";
import {
  Box,
  Card,
  Chip,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Community } from "../utils/types";
import { Icon, IconifyIcon, InlineIcon } from "@iconify/react";
import discordIcon from "@iconify-icons/mdi/discord";
import facebookIcon from "@iconify-icons/il/facebook";

const StyledCard = styled(Card)`
  width: 256px;
  margin: 10px 20px;
  box-shadow: 2px gray;
  /* border: 1px solid darkgray; */
  /* border-radius: 10px; */
`;

const StyledMedia = styled(CardMedia)`
  height: 256px;
  background-size: cover;
  /* border-bottom: 1px solid gray; */
`;

const StyledIcon = styled(Icon)`
  height: 24px;
  width: 24px;
  margin-left: auto;
  margin-right: 5px;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
`;

const StyledChip = styled(Chip)`
  margin: 2px;
  margin-left: 2px;
  height: 20px;
`;
const StyledCardContent = styled(CardContent)`
  /* padding: 9.5px; */
`;

const iconMappings: any = {
  Discord: discordIcon,
  Facebook: facebookIcon,
};

export default function CommunityCard({
  name,
  type,
  logo,
  url,
  categories,
}: Community) {
  console.log(categories);
  return (
    <StyledCard variant="outlined">
      <a href="/">
        <CardHeader
          avatar={
            <StyledIcon icon={iconMappings[type!]} height="24px" width="24px" />
          }
          title={
            <Box fontWeight="500" fontSize={18}>
              {name}
            </Box>
          }
        />
        <CardActionArea>
          <StyledMedia image={logo} title={name} />
          <StyledCardContent>
            <Typography variant="body2" color="textSecondary">
              Here is a description of the community.
            </Typography>
          </StyledCardContent>
        </CardActionArea>
      </a>
      <StyledCardActions>
        {categories && categories.map((c) => <StyledChip label={c} />)}
      </StyledCardActions>
    </StyledCard>
  );
}
