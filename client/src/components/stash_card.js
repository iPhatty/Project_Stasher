import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div``;

const StashCard = props => {
  const { name, status, location, photoUrl } = props;
  return (
    <CardContainer>
      <p>{name}</p>
      <p>{status}</p>
      <p>{location}</p>
    </CardContainer>
  );
};

export default StashCard;
