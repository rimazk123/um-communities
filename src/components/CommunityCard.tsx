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
import { Icon } from "@iconify/react";
import discordIcon from "@iconify-icons/mdi/discord";
import facebookIcon from "@iconify-icons/il/facebook";

const StyledCard = styled(Card)`
  width: 324px;
  margin: 10px 20px;
  /* border: 1px solid darkgray; */
  border-radius: 10px;
`;

const StyledMedia = styled(CardMedia)`
  height: 288px;
  background-size: cover;
  /* border-bottom: 1px solid gray; */
`;

const StyledIcon = styled(Icon)`
  height: 24px;
  width: 24px;
  margin-left: auto;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
`;

interface ChipProps {
  background: string;
}

const StyledChip = styled(Chip)`
  margin: 2px;
  margin-left: 2px;
  height: 20px;
  background-color: ${(props: ChipProps) => props.background};
`;

const StyledCardContent = styled(CardContent)`
  /* padding: 9.5px; */
`;

const iconMappings: any = {
  Discord: discordIcon,
  Facebook: facebookIcon,
};

const tagMappings: { [key: string]: string } = {
  Entrepreneurship: "#876300",
  Gaming: "#870000",
  Sports: "#006918",
  Social: "#006069",
  Memes: "#002869",
  Major: "#bd5200",
};

export default function CommunityCard({
  name,
  type,
  logo,
  url,
  categories,
  desc,
}: Community) {
  console.log(categories);
  return (
    <div>
      <StyledCard>
        <a href="/">
          <CardHeader
            avatar={
              <StyledIcon
                icon={iconMappings[type!]}
                height="24px"
                width="24px"
              />
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
                {desc}
              </Typography>
            </StyledCardContent>
          </CardActionArea>
        </a>
        <StyledCardActions>
          {categories &&
            categories.map((c) => (
              <StyledChip background={tagMappings[c]} label={c} />
            ))}
        </StyledCardActions>
      </StyledCard>
    </div>
  );
}
