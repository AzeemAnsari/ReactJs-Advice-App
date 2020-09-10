import React from 'react';

import { AdviceCard, AdviceText } from './Styles';

const Card = ({ children, cardText }) => {
  return (
    <AdviceCard>
      <AdviceText>{cardText}</AdviceText>
      {children}
    </AdviceCard>
  );
};

export default Card;
