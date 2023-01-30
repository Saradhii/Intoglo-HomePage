import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function WaveCta() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#0A121E"
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg> */}
      <CtaWrapper id="contact">
        <Container>
          <Title>Connect With Us</Title>
          <Description>
            Intoglo’s solution is simple, efficient and cost-effective. We look forward to discussing your export needs.
          </Description>
          <Description>
            Get in touch with us now{' '}
            <u>
              <a href="mailto:contact@intoglo.com">contact@intoglo.com</a>
            </u>
          </Description>
          <Description></Description>

          {/* <CustomButtonGroup>
            <Button onClick={() => setIsModalOpened(true)}>
              Subscribe to the newsletter <span>&rarr;</span>
            </Button>
            <NextLink href="/features" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </CustomButtonGroup> */}
        </Container>
      </CtaWrapper>
    </>
  );
}

const CtaWrapper = styled.div`
  background: #1a202c;
  margin-top: -10rem;
  padding-top: 10rem;
  padding-bottom: 16rem;
  // border:1px solid red;

  ${media('<=tablet')} {
    padding-top: 8rem;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 4rem;
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;

const Description = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--textSecondary));
  margin-bottom: 3rem;

  ${media('<=tablet')} {
    font-size: 1.6rem;
  }
`;
