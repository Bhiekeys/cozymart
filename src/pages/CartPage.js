import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';
import Lottie from 'lottie-react';
import animationData from '../assets/cartA.json';
import { motion } from 'framer-motion';
const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <motion.div
          className="empty"
          initial={{ opacity: 0, y: '20%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-20%' }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
          }}>
          <motion.div
            animate={{ rotate: [0, 0, 20, 20, 0] }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
            }}>
            <Lottie animationData={animationData} style={{ height: '230px' }} />
          </motion.div>
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            Shop Now
          </Link>
        </motion.div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
overflow:hidden;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
    .player{
      width: 200px;
    }
  }
`;

export default CartPage;
