import React from 'react';
import styled from 'styled-components';
import { services } from '../utils/constants';
import { useRef } from 'react';
import { motion } from 'framer-motion';
// import useScrollY from '../animation/useScrollY';
import useIntersectionObserver from '../animation/useIntersectionObserver';

const Services = () => {
  // const scrollY = useScrollY();
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const titleAnimation = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const serviceAnimation = {
    whileHover: {
      scale: 1.0,
      backgroundColor: '#fff',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.4,
        duration: 1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <Wrapper>
      <motion.div
        className="section-center"
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}>
        <motion.article
          className="header"
          initial="hidden"
          animate="visible"
          variants={titleAnimation}>
          <motion.h3
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : '-100%' }}
            transition={{ duration: 1, ease: 'easeOut' }}>
            Exclusively Crafted Furniture
            <br />
            Tailored to Your Tastes
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : '100%' }}
            transition={{ duration: 1, ease: 'easeOut' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
        </motion.article>
        <div className="services-center">
          {services.map((service, index) => {
            const { id, icon, title, text } = service;
            return (
              <motion.article
                key={id}
                className="service"
                whileHover={serviceAnimation.whileHover}
                whileTap={{ scale: 0.9 }}
                initial="hidden"
                animate="visible"
                variants={serviceAnimation}
                custom={index}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }

  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;

export default Services;
