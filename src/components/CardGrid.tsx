import React from 'react';
import styled from 'styled-components';
import CommunityCard from './CommunityCard';
import { Filters } from '../utils/types';
import { useCommunities } from '../utils/hooks';

const Grid = styled.div`
  display: grid;
  grid-gap: 0.65em;
  grid-template-rows: min-content;
  margin: auto;
  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function CardGrid({ filters }: { filters: Filters }) {
  const communities = useCommunities(filters);

  const render = () => {
    if (!communities) return null;
    if (communities.length) {
      return communities.map((community) => <CommunityCard {...community} />);
    }
    return <p>No Communities were found :( </p>;
  };

  return (
    <>
      <Grid>{render()}</Grid>
    </>
  );
}
