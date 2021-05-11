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
import { Icon } from "@iconify/react";
import discordIcon from "@iconify-icons/mdi/discord";
import facebookIcon from "@iconify-icons/il/facebook";
import { Community } from "../utils/types";

const cardWidth = "300px";
const halfWidth = "150px";

const StyledCard = styled(Card)`
  width: ${cardWidth};
  margin: 10px 20px;
  /* background-color: #2e3136; */
  border-radius: 5px;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledMedia = styled(CardMedia)`
  height: ${halfWidth};
  width: ${halfWidth};
  margin-left: auto;
  background-size: cover;
  border-bottom-left-radius: 40%;
  /* border-bottom: 1px solid gray; */
`;

const HeaderContainer = styled.div`
  display: block;
  max-width: ${halfWidth};
  padding: 20px;
  margin: auto;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding-right: 10px;
  padding-bottom: 10px;
`;

const StyledIcon = styled(Icon)`
  height: 28px;
  width: 28px;
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
  min-height: 125px;
`;

const iconMappings: any = {
  Discord: discordIcon,
  Facebook: facebookIcon,
};

const tagMappings: { [key: string]: string } = {
  Professional: "#876300",
  Gaming: "#870000",
  Sports: "#006918",
  Social: "#006069",
  Memes: "#002869",
  Major: "#bd5200",
};

export default function CommunityCard({ name, type, logo, url, categories, desc }: Community) {
  console.log(categories);
  return (
    <div>
      <StyledCard variant='outlined'>
        <a href={url}>
          <HorizontalContainer>
            <HeaderContainer>
              <Box fontWeight='600' fontSize={22} textAlign='center' color='white'>
                {name}
              </Box>
            </HeaderContainer>
            <StyledMedia image={logo} title={name} />
          </HorizontalContainer>
          <CardActionArea>
            <StyledCardContent>
              <Typography variant='body2' color='textSecondary'>
                {desc}
              </Typography>
            </StyledCardContent>
          </CardActionArea>
          <IconContainer>
            <StyledIcon icon={iconMappings[type!]} />
          </IconContainer>
        </a>
        <StyledCardActions>
          {categories?.map((c) => (
            <StyledChip background={tagMappings[c]} label={c} />
          ))}
        </StyledCardActions>
      </StyledCard>
    </div>
  );
}
