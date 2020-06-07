import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import styled from 'styled-components';
import WelcomeScreen from './WelcomeScreen';
import BurgerMakerScreen from './BurgerMakerScreen';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setLoading(true));
    }, 1000);
  });

  return (
    <>
      {!loading ? (
        <LoadingWrapper>
          <LoadingTitle>Loading...</LoadingTitle>
          <ReactLoading type={"bars"} color={"white"} />
        </LoadingWrapper>
      ) : (
          <Router>
            <Route exact path='/' component={WelcomeScreen} />
            <Route path='/burger' component={BurgerMakerScreen} />
          </Router>
        )}
    </>
  )
};

export default App;

const LoadingTitle = styled.h2`
  color: #fff;
  font-size: 30px;
  font-family: 'Yanone Kaffeesatz';
`;

const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: radial-gradient(#5C5C5C , #000000);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;