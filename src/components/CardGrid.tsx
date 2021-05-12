import React from "react";
import styled from "styled-components";
import CommunityCard from "./CommunityCard";
import { Filters } from "../types/types";
import useCommunities from "../hooks/useCommunities";

const Grid = styled.div`
  display: grid;
  grid-gap: 0.65em;
  grid-template-rows: min-content;
  margin-left: 5%;
  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1530px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function CardGrid({ filters }: { filters: Filters }): JSX.Element {
  const communities = useCommunities(filters);

  const render = () => {
    if (!communities) return null;
    if (communities.length) {
      return communities.map((community) => (
        <CommunityCard
          name={community.name}
          type={community.type}
          categories={community.categories}
          desc={community.desc}
          logo={community.logo}
          url={community.url}
        />
      ));
    }
    return <p>No Communities were found :( </p>;
  };

  return (
    <>
      <Grid>{render()}</Grid>
    </>
  );
}
