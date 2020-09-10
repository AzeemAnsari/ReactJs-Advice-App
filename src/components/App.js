import React, { useState, useEffect } from 'react';
import Header from './Header';
import Button from './Button';
import Card from './Card';

import axios from 'axios';

import Logo from '../images/logo.png';

import { GlobalStyles, AppWrapper, AdviceCard } from './Styles';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    setLoading(true);
    setErrorMsg(null);
    axios
      .get('https://api.adviceslip.com/advice')
      .then((res) => {
        setLoading(false);
        setAdvice(res.data.slip.advice);
      })
      .catch((error) => {
        setErrorMsg(error);
        setLoading(false);
      });
  };
  const cardText = errorMsg
    ? 'Oops! Check your internet connection and try again.'
    : advice;

  return (
    <React.Fragment>
      <AppWrapper>
        <Header Logo={Logo} />
        <Card cardText={cardText}>
          <Button
            loading={loading}
            errorMsg={errorMsg}
            fetchAdvice={fetchAdvice}
          />
        </Card>
      </AppWrapper>
      <GlobalStyles />
    </React.Fragment>
  );
};

export default App;
