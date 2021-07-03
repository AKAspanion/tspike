import styled from 'styled-components';

import device from '../../theme/device';

export default styled.div`
  font-size: 32px;
  margin: 0px auto;

  @media ${device.laptop} {
    max-width: ${({ theme }) => theme.maxWidth};
  }
`;
