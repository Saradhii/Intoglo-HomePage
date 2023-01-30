import styled from 'styled-components';
import { media } from 'utils/media';

const SectionTitle2 = styled.div`
  font-size: 4.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 40px;

  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;

export default SectionTitle2;
