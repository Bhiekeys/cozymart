import React from 'react';
import styled from 'styled-components';
const Logo = () => {
  return (
    <Wrapper>
      <h2 className="logo">
        Cozy<span>Mart</span>
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`

.logo{
  font-size:33px;
  color:#020202;
   font-style: oblique;
  font-weight:500;
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.logo span{
   color:var(--clr-primary-5);
}
`;

export default Logo;
