import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import heroBcg from '../assets/comfy1.jpg';
// import heroBcg2 from '../assets/hero-bcg-2.jpeg';
import bg from '../assets/cozy1.jpg';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import useScrollY from '../animation/useScrollY';
import useIntersectionObserver from '../animation/useIntersectionObserver';

const Hero = () => {
  const image = `url(${bg})`;
  // const scrollY = useScrollY();
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <motion.div
      style={{
        backgroundImage: image,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0,
        backgroundBlendMode: "multiply",
      }}
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}>
      <Wrapper className="section-center">
        <motion.article className="content">
          <motion.h1
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : '-100%' }}
            transition={{ duration: 1, ease: 'easeOut' }}>
            Customize your comfort zone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : '100%' }}
            transition={{ duration: 2, ease: 'easeOut' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec volutpat odio, eu sollicitudin nisi. Fusce commodo, nulla quis
            varius auctor, est neque fermentum sapien.
          </motion.p>
          <Link to="/products" className="btn hero-btn">
            Shop Now
          </Link>
        </motion.article>
        {/* <motion.article
          className="img-container"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : '100%' }}
          transition={{ duration: 1, ease: 'easeOut' }}>
          <img src={heroBcg} alt="nice" className="main-img" />{' '}
          <img src={heroBcg2} alt="nice" className="accent-img" />
        </motion.article> */}
      </Wrapper>
    </motion.div>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  text-align: center;
  place-items: center;
  overflow-x:hidden;
 
  .img-container {
    display: none;
  }
h1{
   color: var(--clr-grey-5);
}
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    /* grid-template-columns: 1fr 1fr; */
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
