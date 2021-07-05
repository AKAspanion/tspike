import styled from 'styled-components';

import { Container } from '../components/';
import { flex } from '../mixins';
import device from '../theme/device';

const QuoteWrapper = styled.div`
  --pad: ${({ theme }) => theme.padding};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const QuoteContainer = styled(Container)`
  ${flex}
  justify-content: space-between;
  padding: calc(var(--pad) * 2) var(--pad);
  @media ${device.laptop} {
    flex-wrap: wrap;
  }
`;

const QuoteItem = styled.div`
  width: calc(50% - 36px);
  @media ${device.laptop} {
    width: 100%;
  }
`;
const QuoteItem1 = styled(QuoteItem)`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.25;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  @media ${device.laptop} {
    font-size: 28px;
    letter-spacing: -0.03em;
  }
  @media ${device.mobile} {
    font-size: 35px;
    letter-spacing: -0.03em;
  }
`;
const QuoteItem2 = styled(QuoteItem)`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.75;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  @media ${device.laptop} {
    padding-left: 0px;
  }
`;

export default function QuoteCard({ quoteLeft, quoteRight }) {
  return (
    <QuoteWrapper>
      <QuoteContainer>
        <QuoteItem1>{quoteLeft}</QuoteItem1>
        <QuoteItem2>{quoteRight}</QuoteItem2>
      </QuoteContainer>
    </QuoteWrapper>
  );
}
