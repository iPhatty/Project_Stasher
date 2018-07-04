import React from 'react';

import StashCard from './stash_card';

const StashList = props => {
  const cardList = <StashCard />;
  return <ul>{cardList}</ul>;
};

export default StashList;
