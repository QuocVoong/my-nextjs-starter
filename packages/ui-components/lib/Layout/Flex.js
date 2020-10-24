import styled from 'styled-components'
import {
  flexbox,
  space,
  color,
  width,
  height,
  layout,
  position,
} from 'styled-system'

export default Flex = styled.div`
  display: flex;

  ${layout};
  ${width};
  ${height};
  ${color};
  ${space};
  ${flexbox};
  ${position};
`
