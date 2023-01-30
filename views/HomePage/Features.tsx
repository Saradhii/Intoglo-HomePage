import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import SectionTitle2 from 'components/SectionTitle2';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'End-to-end Logistics planning',
    description:
      'End-to-end logistics means less hassles for businesses. It covers the complete logistics cycle, starting with procurement and distribution, transport, delivery to the customer and ending with return logistics, it means less worries for businesses.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Clear & complete documentation',
    description:
      'Invoices, bills of lading, shipping slips, customs documents, and packing lists are just a few of the (typically) paper documents that are passed through many hands from supplier to receiver to end customer.',
  },
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Multi-modal visibility',
    description:
      'As the name suggests, multimodal visibility or intermodal visibility refers to the ability of an enterprise or business to track and trace cargo or freight movement across four major modes of transportation--through air, waterways, railways and road.',
  },
  // {
  //   imageUrl: '/grid-icons/asset-4.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-5.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-6.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-7.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-8.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-9.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
];

export default function Features() {
  return (
    <Container id="solutions">
      <SectionTitle2>Intoglo is the single point of contact for your cross-border logistics needs.</SectionTitle2>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 25rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
