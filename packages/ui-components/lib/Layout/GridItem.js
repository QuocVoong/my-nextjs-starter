import styled from 'styled-components';
import {
  space,
  gridArea,
  flexbox,
  height,
} from 'styled-system'

export const GridItem = styled.div`
  width: 100%;

  ${height};
  ${space};
  ${gridArea}
  ${flexbox};
`;
