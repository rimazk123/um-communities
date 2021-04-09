import React from "react";
import CommunityCard from "./CommunityCard";
import { Filters } from "../utils/types";
import { useCommunities } from "../utils/hooks";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 0.65em;
  grid-template-rows: min-content;
  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
    width: 925px;
  }
`;

export default function CardGrid({ filters }: { filters: Filters }) {
  const communities = useCommunities(filters);
  console.log(communities);
  return (
    <>
      <Grid>
        {communities &&
          communities.map((community) => <CommunityCard {...community} />)}
      </Grid>
    </>
  );
}
