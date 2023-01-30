import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import Features from './Features';

export default function About() {
  return (
    <CtaWrapper id="about">
      <Container>
        <Stack>
          <OverTitle>Who we are</OverTitle>
          <SectionTitle>About</SectionTitle>
          <Description>
            Intoglo is an ISB+IIM alums founded startup looking to disrupt the Global Cross-Border E-Commerce space using technology. We
            work with D2C brands selling in high ARPU global markets.
            <br></br>
            <br></br>
            Intoglo uses its in-house data-driven tools to aggregate logistics for global markets. Our propriety technology helps reducing
            shipping costs by offering brands the best available option to ship across the world.
            <br></br>
            <br></br>
            About Intoglo’s Founders: The founders have been CEOs and Head of Depts. in large companies scaling multiple businesses. They
            have solid pedigree coming from ISB, IIM and IITs. They have phenomenal experience in building tech businesses across Unicorns.
          </Description>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.7rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
  padding-bottom: 40px;
  // border:1px solid red;
  margin-top: -100px;
`;
