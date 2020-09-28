import React from 'react';

import { FaGithub } from 'react-icons/fa';

import { LogoDiv } from './Styles';

const Header = ({ Logo }) => {
  return (
    <LogoDiv>
      <img src={Logo} alt="Azeem Ansari" />
      <a
        href="https://github.com/AzeemAnsari"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size="2em" color="white" />
      </a>
    </LogoDiv>
  );
};

export default Header;
