import styled from 'styled-components'
import {
  grid,
  space,
  flexbox,
  height,
  color,
} from 'styled-system'

export default Grid = styled.div`
  display: grid;
  &&& {
    ${space};
    ${grid};
    ${flexbox};
    ${height};
    ${color};
  }
`;
