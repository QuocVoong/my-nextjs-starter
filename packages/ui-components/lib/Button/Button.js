import * as React                 from 'react';
import { BaseButton, ButtonSize } from './BaseButton';
import styled                     from 'styled-components';

const PADDINGS = {
  [ButtonSize.EXTRA_LARGE]: '0 10.5px',
  [ButtonSize.DEFAULT]:     '0 9px',
  [ButtonSize.LARGE]:       '0 9px',
  [ButtonSize.SMALL]:       '0 8px',
};

const ButtonRender = ({
                        className,
                        children,
                        ...rest
                      }) => {
  const { loading } = rest;

  const content = React.useMemo(() => {
    if (typeof children === 'string') {
      return <span className="btn-text">{children}</span>;
    }

    return children;
  }, [children]);

  return (
    <BaseButton className={className} {...rest}>
      {content}
    </BaseButton>
  );
};

export const Button = styled(ButtonRender)`
  .btn-text {
    padding: ${({ size }) => PADDINGS[size]};
  }
`;

Button.defaultProps = {
  loading: false,
  size:    ButtonSize.DEFAULT,
};
