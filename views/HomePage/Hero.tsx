/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
// import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  // const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <>
    <Head>
    <meta name="description"  content="Intoglo - Fast, Simple and Reliable Cross Border Logistics Platform"/>
    <title>Intoglo - Fast, Simple and Reliable Cross Border Logistics Platform</title>
    <meta name="robots" content="noindex,nofollow"></meta>
    </Head>
    <HeroWrapper>
      <Contents>
        {/* <CustomOverTitle>the coolest, saas product you have ever seen</CustomOverTitle> */}
        <Heading>Fast, Simple and Reliable Cross Border Logistics Platform</Heading>
        <Description>
          Intoglo is the cross-border logistics platform you've been waiting for.<br></br><br></br>We combine modern technology, robust processes, workflow
          automation and expert help to provide a friction-free experience.<br></br><br></br>
          Intoglo’s unique solution helps to overcome the challenges many global shippers face, including lack of knowledge of global market trends, export regulations, documentation and the complexities in cross-border trade.
        </Description>
        <CustomButtonGroup>
          <NextLink href="#contact" passHref>
            <Button>
              Request Callback <span>&rarr;</span>
            </Button>
          </NextLink>
          {/* <NextLink href="#whitepaper" passHref>
            <Button transparent>
              Features <span>&rarr;</span>
            </Button>
          </NextLink> */}
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
    </>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.7rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 5.7rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
