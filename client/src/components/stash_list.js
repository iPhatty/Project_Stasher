import React from 'react';
import styled from 'styled-components';

import SortList from './sort_dropdown';
import FilterList from './filter_list';
import StashCard from './stash_card';

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  padding: 1rem;
  margin: 0;
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
        capacity={stashpoint.capacity}
        address={stashpoint.address}
        postalCode={stashpoint.postal_code}
      />
    );
  });

  // render unordered list
  // Only render sorting list if more than one result has been returned
  return (
    <div>
      {props.stashPoints.length > 1 && (
        <div>
          <FilterList filterList={props.listFilter} />
          <SortList sortList={props.listSort} />
        </div>
      )}
      {Object.keys(props.error).length > 0 ? (
        <p>{props.error.city}</p>
      ) : (
        <ListContainer>{cardList}</ListContainer>
      )}
    </div>
  );
};

export default StashList;
