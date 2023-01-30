import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import SectionTitle2 from 'components/SectionTitle2';
import { media } from 'utils/media';
import Features from './Features';

export default function Cta() {
  return (
    <CtaWrapper id="why_intoglo">
      <Container>
        <Stack>
          <OverTitle>Why Intoglo</OverTitle>
          <SectionTitle>Intoglo is making the cross-border logistics 10x better</SectionTitle>
          <Description>
            Intoglo’s deep understanding of the complexities and inefficiencies in the cross-border journey, as well as the pain points
            faced by the exporters and importers today, has driven them to shape their solutions, product and technology to perfectly meet
            the needs of their customers.
          </Description>
          <Description>
            Intoglo offers a unique solution that benefits both existing and emerging exporters/importers. Existing exporters can take
            advantage of competitive pricing, reliable delivery and great customer service, while emerging and first-time exporters can
            enjoy transparency, simple and friendly onboarding, assistance with documentation/customs compliance and end-to-end solutions.
          </Description>
          <ButtonGroup>
            <NextLink href="#contact" passHref>
              <Button>
                Request Callback<span>&rarr;</span>
              </Button>
            </NextLink>
            {/* <NextLink href="#features" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink> */}
          </ButtonGroup>
          {/* <OverTitle>Intoglo is the single point of contact for your cross-border logistics needs.</OverTitle> */}
        </Stack>
        {/* <Stack>
          <OverTitle>Solutions</OverTitle>
          <SectionTitle2>Intoglo is the single point of contact for your cross-border logistics needs.</SectionTitle2>
          <Features />
        </Stack> */}
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
`;
