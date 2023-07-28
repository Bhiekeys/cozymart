import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageHero } from '../components';
// import {  StripeCheckout } from '../components';

// extra imports
// import { useCartContext } from '../context/cart_context';
// import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <motion.h1
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{
            duration: 10,
            ease: 'linear',
            // repeat: Infinity,
            // repeatType: 'loop',
            // repeatDelay: 5,
          }}>
          Just a demo, thank you for checking through our sample website
        </motion.h1>{' '}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
height:50vh;
display: grid;
place-items:center;
text-align: center;
overflow-x:hidden;
`;
export default CheckoutPage;
