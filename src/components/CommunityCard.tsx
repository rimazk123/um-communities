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

interface ICardDTO {
  community: string;
  platform: string;
  image: string;
}

const StyledCard = styled(Card)`
  width: 275px;
`;

const StyledMedia = styled(CardMedia)`
  height: 140px;
`;

export default function CommunityCard({
  community,
  platform,
  image,
}: ICardDTO) {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledMedia image={image} title={community} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {platform}
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </StyledCard>
  );
}
