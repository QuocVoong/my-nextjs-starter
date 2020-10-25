import styled from 'styled-components'
import {
  flexbox,
  space,
  color,
  width,
  height,
} from 'styled-system'

export const InlineFlex = styled.div`
  display: inline-flex;

  ${width};
  ${height};
  ${color};
  ${space};
  ${flexbox};
`
