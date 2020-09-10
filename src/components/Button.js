import React from 'react';

import { Btn } from './Styles';

const Button = ({ loading, fetchAdvice, errorMsg }) => {
  return (
    <React.Fragment>
      <Btn onClick={fetchAdvice}>
        {loading ? 'Loading...' : errorMsg ? 'Reload' : 'GIVE ME ADVICE!'}
      </Btn>
    </React.Fragment>
  );
};

export default Button;
