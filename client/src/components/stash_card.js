import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  padding: 3%;
  background-color: #fbfbfb;
  box-shadow: 1px 1px 1px rgb(2, 112, 230);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  width: 90%;
  padding: 0.3rem;
  font-size: 0.8rem;
`;

const Text = styled.p`
  margin: 0;
`;

const Img = styled.img`
  width: 100px;
`;

const StashCard = props => {
  const {
    name,
    status,
    location,
    photoUrl,
    capacity,
    address,
    postalCode
  } = props;
  return (
    <CardContainer>
      <Img src={photoUrl} alt={name} />
      <Info>
        <Text>
          {name} - {status}
        </Text>
        <Text>{location}</Text>
        <Text>{address}</Text>
        <Text>{postalCode}</Text>
        <Text>Capacity:{capacity}</Text>
      </Info>
    </CardContainer>
  );
};

export default StashCard;
