import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';
import {motion} from "framer-motion"
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <motion.img
          src={aboutImg}
          alt="nice desk"
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.article
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 1, ease: 'easeOut' }}>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec volutpat odio, eu sollicitudin nisi. Fusce commodo, nulla quis
            varius auctor, est neque fermentum sapien, a rhoncus urna ex quis
            lorem. Curabitur ultricies est id blandit dictum. Maecenas euismod
            tellus id justo rhoncus, vitae congue nunc viverra. In hac habitasse
            platea dictumst. Nam interdum facilisis elementum.Maecenas euismod
            tellus id justo rhoncus, vitae congue nunc viverra. In hac habitasse
            platea dictumst. Nam interdum facilisis elementum.Maecenas euismod
            tellus id justo rhoncus, vitae congue nunc viverra. In hac habitasse
            platea dictumst. Nam interdum facilisis elementum.
          </p>
        </motion.article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  overflow-x:hidden;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-4);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
