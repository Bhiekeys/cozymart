import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import useScrollY from '../animation/useScrollY';
import useIntersectionObserver from '../animation/useIntersectionObserver';
import { useRef } from 'react';
const Contact = () => {
  // const scrollY = useScrollY();
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  return (
    <Wrapper>
      <motion.div
        className="section-center"
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 1, ease: 'easeOut' }}>
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/xvojgbnz"
            method="POST">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-4);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    /* padding: 0.5rem 1rem; */
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
    .form-input,
  .submit-btn {
    padding: 0.5rem 1rem;
  }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
