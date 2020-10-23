import styled, { css } from 'styled-components';
import classnames      from 'classnames'
import {
  color,
  space,
  width,
  height,
  typography,
} from 'styled-system'
import { keyframes, mixins } from '../../styles'

export const SIZES = {
  small:   css`
    font-size: 12px;
    line-height: 1.66666667;
  `,
  default: css`
    font-size: 14px;
    line-height: 1.42857143;
  `,
  large:   css`
    font-size: 16px;
    line-height: 1.375;
  `,
};

export const IconSize = {
  SMALL:   'small',
  DEFAULT: 'default',
  LARGE:   'large'
};

export const Icon = styled.i.attrs(({ type, size, spin }) => ({
  className: classnames({
    [`uil-${type}`]: type,
    [`size-${size}`]: size,
    spin,
  }),
}))`
  text-align: center;
  line-height: 1em;
  
  ${mixins.size(IconSize.LARGE, SIZES.large)};
  ${mixins.size(IconSize.DEFAULT, SIZES.default)};
  ${mixins.size(IconSize.SMALL, SIZES.small)};

  &&& {
    &::before {
      margin: 0;
    }
  }

  &.spin {
    animation: ${keyframes.spin} ${({ period }) => period}s infinite linear;
  }

  &&& {
    ${color};
    ${space};
    ${width};
    ${height};
    ${typography};
  }
`

Icon.defaultProps = {
  period: 0.5,
}
