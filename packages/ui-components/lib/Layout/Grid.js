import styled from 'styled-components'
import {
  grid,
  space,
  flexbox,
  gridArea,
  height,
  color,
} from 'styled-system'

export const GridItem = styled.div`
  width: 100%;

  ${height};
  ${space};
  ${gridArea}
  ${flexbox};
`

export const Grid = styled.div`
  display: grid;
  &&& {
    ${space};
    ${grid};
    ${flexbox};
    ${height};
    ${color};
  }
`
