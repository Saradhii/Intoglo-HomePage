import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
// import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import AboutUs from 'views/HomePage/AboutUs';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        {/* <meta
          name="description"
          content="HS Code Look Up | Intoglo - Fast, Simple and Reliable Cross Border Logistics Platform"
        /> */}
        <link rel="icon" href="https://ik.imagekit.io/qtf62wap9/es/static/u/intoglo.com/images/favicon/original/intoglo_favicon.png" />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          {/* <BasicSection
            imageUrl="/demo-illustration-6.jpg"
            title="Intoglo is the single point of contact for your cross-border logistics needs."
            overTitle="End-to-end Logistics planning"
          > */}
          {/* <p> */}
          {/* <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link>  */}
          {/* Intoglo’s deep understanding of the complexities and inefficiencies in the cross-border journey, as well as the pain points
              faced by the exporters and importers today, has driven them to shape their solutions, product and technology to perfectly meet
              the needs of their customers. */}
          {/* </p>
          </BasicSection> */}
          {/* <BasicSection
            imageUrl="/demo-illustration-6.jpg"
            title="Intoglo is the single point of contact for your cross-border logistics needs."
            overTitle="Intoglo"
            reversed
          > */}
          {/* <p>
              Intoglo’s unique solution helps to overcome the challenges many global shippers face, including lack of knowledge of global
              market trends, export regulations, documentation and the complexities in cross-border trade.
            </p> */}
          {/* <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul> */}
          {/* </BasicSection> */}
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          {/* <FeaturesGallery /> */}
          <Features />
          <Testimonials />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 10rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
