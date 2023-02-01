import React from 'react';
import styled from 'styled-components';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';

import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    companyLogoUrl: 'hindcha.png',
    content: `Before Intoglo, we were trying to manage our global logistics through multiple partners but we were facing a lot of operational challenges. Love how Intoglo team has helped ease the entire process for us and made it seamless. And we got better prices as well. We had perfect customer support from Apoorva and his team`,
    author: {
      name: 'Keshav Mittal',
      title: 'Hindcha, D2C Global Tea Brand',
      avatarUrl: '/testimonials/author-photo-2.jpeg',
    },
  },
  {
    companyLogoUrl: 'akiva_love.png',
    content: `Intoglo team has been super helpful in bringing down our logistics costs and opening up the new global markets to us. Mrigank and Sufal have been very professional. The best part is everything is told to us transparently without any hidden costs. The team works as a part of the logistics team for you and gives extremely sincere suggestions, not just on the logistics but also other pieces. Would wish them all the best`,
    author: {
      name: 'Hardik',
      title: 'Akiva Health Shots',
      avatarUrl: '/testimonials/author-photo-1.jpeg',
    },
  },
  {
    companyLogoUrl: 'cavinkare.jpg',
    content: `Great service provided. A very reliable, cooperative & efficient company. Pleased with the overall service and clear communication that they provide.`,
    author: {
      name: 'Nidhi Gupta',
      title: 'CavinKare',
      avatarUrl: '/testimonials/author-photo-3.jpeg',
    },
  },
  {
    companyLogoUrl: 'ayurveda_experience.png',
    content: `Working with Intoglo has been great so far, it really feels like your own team on the ground. The amount of ownership displayed has been truly inspiring. I wish you guys a lot of success and hope to recommend you to as many people as I can. Best Wishes!`,
    author: {
      name: 'Amogh, Supply Chain Head',
      title: 'Ayurveda Experience',
      avatarUrl: '/testimonials/author-photo-2.jpeg',
    },
  },
  {
    companyLogoUrl: 'gb_logo.png',
    content: `Your services are great. Quick response in RFQ is appreciable. Understanding the requirement from us & attention to details are best in Intoglo.`,
    author: {
      name: 'Aslam Pasha',
      title: 'GlobalBees',
      avatarUrl: '/testimonials/author-photo-1.jpeg',
    },
  },
  {
    companyLogoUrl: 'nutrition_lab.png',
    content: `Always find the right solution. Intoglo team is amazing, professional, timely and communicative. They work seamlessly and when troubleshooting is needed, they always find the right solution.`,
    author: {
      name: 'Adnan Kapadia',
      title: 'Nutrition Lab',
      avatarUrl: '/testimonials/author-photo-3.jpeg',
    },
  },
];

export default function Testimonials() {
  return (
    <div>
      <Container>
        <Stack>
          <SectionTitle3>Testimonials</SectionTitle3>
          <Description>See what people say about Intoglo Private Limited</Description>
          <TestimonialsWrapper>
            <Swiper modules={[Navigation, Autoplay, A11y]} slidesPerView={1} autoplay={{ delay: 4000 }} centeredSlides navigation loop>
              {TESTIMONIALS.map((singleTestimonial, idx) => (
                <SwiperSlide key={idx}>
                  <TestimonialCard>
                    <div className="testy">
                      <div>
                        <img
                          src={'client_logos/' + singleTestimonial.companyLogoUrl}
                          alt={`${singleTestimonial.author.title}'s company logo`}
                        />
                      </div>
                      <div>
                        <Content>“{singleTestimonial.content}”</Content>
                      </div>
                      <div>
                        <AuthorContainer>
                          <AuthorContent>
                            <AuthorName>{singleTestimonial.author.name}</AuthorName>
                            <AuthorTitle>{singleTestimonial.author.title}</AuthorTitle>
                          </AuthorContent>
                        </AuthorContainer>
                      </div>
                    </div>
                  </TestimonialCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </TestimonialsWrapper>
        </Stack>
      </Container>
    </div>
  );
}

const TestimonialsWrapper = styled(Container)`
  position: relative;
  margin-top: -80px;
  margin-bottom: -50px;
  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--secondary));

    ${media('<=desktop')} {
      display: none;
    }
  }

  .swiper-button-prev {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }

  .swiper-button-next {
    color: rgb(var(--textSecondary));
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23currentColor'%2F%3E%3C%2Fsvg%3E");
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const Content = styled.blockquote`
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;
  max-width: 60%;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.4rem;
`;

const AuthorTitle = styled.p`
  font-weight: bold;
  text-align: center;
`;

const AuthorName = styled.p`
  font-weight: normal;
  text-align: center;
`;

const AuthorImageContainer = styled.div`
  display: flex;
  border-radius: 10rem;
  margin-right: 1rem;
  overflow: hidden;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
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

const Description = styled.div`
  font-size: 1.7rem;
`;

const SectionTitle3 = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: -10px;
  margin-top: -50px;

  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;
