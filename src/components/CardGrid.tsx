import React from "react";
import CommunityCard from "./CommunityCard";
import { Filters } from "../utils/types";
import { useCommunities } from "../utils/hooks";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 0.65em;
  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function CardGrid({ filters }: { filters: Filters }) {
  const communities = useCommunities(filters);
  return (
    <>
      <Grid>
        {communities &&
          communities.map((community) => (
            <CommunityCard
              name={community.name}
              type={community.type}
              logo={community.logo}
            />
          ))}
      </Grid>
    </>
  );
}
