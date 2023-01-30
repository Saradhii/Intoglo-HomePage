import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

const PARTNER_LOGOS = [
  'akiva_love.png',
  'almo.png',
  'ayurveda_experience.png',
  'barosi.png',
  'blue_tea.png',
  'bonayu.jpg',
  'cavinkare.jpg',
  'even_flow.png',
  'geniemode.jpg',
  'hindcha.png',
  'life_of_bile.jpg',
  'matras_exporters.png',
  'nexpert.png',
  'nykaa.png',
  'plum.jpg',
  'rakuten.png',
  'softee_bay.jpg',
  'wellbeing_nutrition.jpg',
  'gb_logo.png',
];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>brands that trust us</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={40}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {PARTNER_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <img src={'/client_logos/' + logo} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.svg', '');
}

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;
  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    user-select: none;
    display: flex;
    place-items: center;
    // border:1px solid red;
    margin-bottom: -5px;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
