import React from 'react';

import { LogoDiv } from './Styles';

const Header = ({ Logo }) => {
  return (
    <LogoDiv>
      <img src={Logo} alt="Azeem Ansari" />
    </LogoDiv>
  );
};

export default Header;
