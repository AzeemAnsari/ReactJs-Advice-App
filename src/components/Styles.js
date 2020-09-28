import styled, { createGlobalStyle, keyframes } from 'styled-components';

import bgImg from '../images/city.jpg';

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
}
#root,
html,
body{
  margin: 0;
  padding: 0;
  height: 100vh;
  box-sizing: border-box;
  font-family: 'Baloo 2', cursive;
}
`;

export const AppWrapper = styled.div`
  height: 100%;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${bgImg}) no-repeat center / cover;
`;

export const LogoDiv = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    text-align: center;
    padding: 5% 5% 0;
    width: 100%;
  }
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Btn = styled.button`
  font-size: 18px;
  font-family: 'Baloo 2', cursive;
  margin-top: 1rem;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  box-shadow: 0 5px 10px 0 rgba(205, 209, 215, 0.8);
  background: linear-gradient(to right, #cb3066, #16bffd);
  color: #fff;
  background-size: 300% 300%;
  animation: ${gradient} 2.5s ease infinite;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const AdviceCard = styled.div`
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  width: 40%;
  border-radius: 5px;
  padding: 2%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 80%;
    padding: 5%;
  }
`;

export const AdviceText = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    font-size: 1.7rem;
  }
`;
