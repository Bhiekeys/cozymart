import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animationData from '../assets/Comp.json';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Wrapper style={{ background: 'var(--clr-primary-10)' }}>
        <Lottie animationData={animationData} />
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return (
    <>
      {children}
    </>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
