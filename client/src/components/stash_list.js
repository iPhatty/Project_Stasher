import React from 'react';
import styled from 'styled-components';

import SortList from './sort_dropdown';
import StashCard from './stash_card';

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StashList = props => {
  // map through stashpoints and render the data into individual cards
  const cardList = props.stashPoints.map(stashpoint => {
    return (
      <StashCard
        key={stashpoint.id}
        name={stashpoint.name}
        status={stashpoint.status}
        location={stashpoint.location_name}
        photoUrl={stashpoint.photos[0]}
      />
    );
  });

  // render unordered list
  return (
    <div>
      {props.stashPoints.length > 0 && <SortList />}
      <ListContainer>{cardList}</ListContainer>
    </div>
  );
};

export default StashList;
