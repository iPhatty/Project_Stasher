import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  padding: 3%;
  background-color: #fbfbfb;
  box-shadow: 2px 2px 10px rgb(2, 112, 230);
  border-radius: 5px;
`;

const Img = styled.img`
  width: 100px;
`;

const StashCard = props => {
  const { name, status, location, photoUrl } = props;
  return (
    <CardContainer>
      <Img src={photoUrl} alt={name} />
      <p>{name}</p>
      <p>{status}</p>
      <p>{location}</p>
    </CardContainer>
  );
};

export default StashCard;
