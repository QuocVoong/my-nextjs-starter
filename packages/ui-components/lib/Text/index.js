import * as React      from 'react';
import styled, { css } from 'styled-components';
import classnames      from 'classnames';
import {
  color,
  typography,
  space,
}                      from 'styled-system';
import { mixins }      from '../../styles';

export const TextSize = {
  XL: 'xl',
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
};

const SIZES = {
  xl: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  `,
  lg: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  `,
  md: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  sm: css`
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
  `,
  xs: css`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  `,
};

export const TextWraper = ({
                             size,
                             ellipsis,
                             children,
                             title,
                             className,
                           }) => {
  const ref = React.useRef(null);

  const [isActiveEllipsis, setActiveEllipsis] = React.useState(false);

  React.useEffect(() => {
    if (ref.current && ref.current.offsetWidth < ref.current.scrollWidth) {
      setActiveEllipsis(true);
    }
  });
  return (
    <span
      ref={ref}
      title={
        (typeof title === 'string' && title) ||
        (isActiveEllipsis && typeof children === 'string' && children)
      }
      className={classnames({ [`size-${size}`]: size, ellipsis }, className)}
    >
      {children}
    </span>
  );
};

export const Text = styled(TextWraper)`
  ${mixins.size(TextSize.XL, SIZES.xl)};
  ${mixins.size(TextSize.LG, SIZES.lg)};
  ${mixins.size(TextSize.MD, SIZES.md)};
  ${mixins.size(TextSize.SM, SIZES.sm)};
  ${mixins.size(TextSize.XS, SIZES.xs)};

  ${mixins.ellipsis()};

  &&& {
    ${color};
    ${typography};
    ${space};
  }
`;

Text.defaultProps = {
  size:  TextSize.MD,
  color: 'dark100',
};
