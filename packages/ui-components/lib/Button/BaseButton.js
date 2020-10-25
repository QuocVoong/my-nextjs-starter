import styled, { css } from 'styled-components';
import classnames      from 'classnames';
import {
  space,
  width,
  minWidth,
  maxWidth,
}                      from 'styled-system';
import { mixins }      from '../../styles';
import { Icon }        from '../Icon';

const KINDS = {
  primary:   css`
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};

    &:not(.loading) {
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.medium15};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.grey65};
        background-color: ${(props) => props.theme.colors.grey15};
      }
    }
  `,
  secondary: css`
    color: ${(props) => props.theme.colors.slat100};
    background-color: ${(props) => props.theme.colors.bird25};
    &:not(.loading) {
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.bird15};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.grey65};
        background-color: ${(props) => props.theme.colors.grey15};
      }
    }
  `,
  negative:  css`
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.red};
    &:not(.loading) {
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.red85};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.grey65};
        background-color: ${(props) => props.theme.colors.grey15};
      }
    }
  `,
};

const LIGHT_KINDS = {
  primary:   css`
    color: ${(props) => props.theme.colors.primary};
    background-color: unset;
    &:not(.loading) {
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.primary15};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.grey65};
        background-color: unset;
      }
    }
  `,
  secondary: css`
    color: ${(props) => props.theme.colors.slat100};
    background-color: unset;

    &:not(.loading) {
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.slat15};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.grey65};
        background-color: unset;
      }
    }
  `,
  negative:  css`
    color: ${(props) => props.theme.colors.red};
    background-color: unset;

    &:not(.loading) {
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.red5};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.grey65};
        background-color: unset;
      }
    }
  `,
};

const BORDER_KINDS = {
  primary:   css`
    color: ${(props) => props.theme.colors.primary};
    background-color: unset;
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:not(.loading) {
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.primary5};
        border: 1px solid ${({ theme }) => theme.colors.primary65};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.grey65};
        background-color: unset;
        border: 1px solid ${({ theme }) => theme.colors.slat65};
      }
    }
  `,
  secondary: css`
    color: ${(props) => props.theme.colors.dark};
    background-color: unset;
    border: 1px solid ${({ theme }) => theme.colors.slat100};

    &:not(.loading) {
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.bird25};
        border: 1px solid ${({ theme }) => theme.colors.slat85};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.grey65};
        background-color: unset;
        border: 1px solid ${({ theme }) => theme.colors.slat65};
      }
    }
  `,
  negative:  css`
    color: ${(props) => props.theme.colors.red};
    background-color: unset;
    border: 1px solid ${({ theme }) => theme.colors.red};

    &:not(.loading) {
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.red5};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.grey65};
        background-color: unset;
        border: 1px solid ${({ theme }) => theme.colors.slat65};
      }
    }
  `,
};

const LINK_KINDS = {
  primary:   css`
    color: ${(props) => props.theme.colors.medium15};
    background-color: unset;

    &:not(.loading) {
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  `,
  secondary: css`
    color: ${(props) => props.theme.colors.slat85};
    background-color: unset;

    &:not(.loading) {
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  `,
};

const SIZES = {
  extra_large: css`
    height: 56px;
    font-size: 17px;
    font-weight: bold;
    line-height: normal;
    padding: 0 18px;
  `,
  large:       css`
    height: 40px;
    font-size: 15px;
    font-weight: 600;
    line-height: 18px;
    padding: 0 11px;

    &&:not(.square) {
      min-width: 80px;
      ${Icon} {
        font-size: 20px;
        margin-right: 8px;
      }
    }

    &.square {
      width: 40px;
      font-size: 20px;
    }
  `,
  default:     css`
    height: 32px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    padding: 0 7px;

    &&:not(.square) {
      min-width: 70px;
      ${Icon} {
        font-size: 19px;
        margin-right: 6px;
      }
    }

    &.square {
      width: 32px;
      font-size: 19px;
    }
  `,
  small:       css`
    height: 24px;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    padding: 0 4px;

    &&&:not(.square) {
      min-width: 80px;
      ${Icon} {
        font-size: 14px;
        margin-right: 4px;
      }
    }

    &.square {
      width: 24px;
      font-size: 14px;
    }
  `,
};

export const ButtonKind = {
  PRIMARY:   'primary',
  SECONDARY: 'secondary',
  NEGATIVE:  'negative',
};

export const ButtonSize = {
  EXTRA_LARGE: 'extra-large',
  LARGE:       'large',
  DEFAULT:     'default',
  SMALL:       'small',
};

export const ButtonView = {
  DEFAULT: 'default',
  LIGHT:   'light',
  BORDER:  'border',
  LINK:    'link',
};

const genName = (kind, view = ButtonView.DEFAULT) =>
  `${kind}-${view}`;

export const BaseButton = styled.button.attrs(
  ({ kind, size, block, view, square, loading, disabled }) => ({
    className: classnames({
      [`kind-${genName(kind, view)}`]: kind,
      [`size-${size}`]:                size,
      block,
      square,
      loading,
    }),
    disabled:  disabled || loading,
  })
)`
  border-radius: 4px;
  border: none;
  outline: none;
  width: fit-content;

  ${mixins.kind(genName(ButtonKind.PRIMARY), KINDS.primary)};
  ${mixins.kind(genName(ButtonKind.SECONDARY), KINDS.secondary)};
  ${mixins.kind(genName(ButtonKind.NEGATIVE), KINDS.negative)};
  ${mixins.kind(
  genName(ButtonKind.PRIMARY, ButtonView.LIGHT),
  LIGHT_KINDS.primary
)};
  ${mixins.kind(
  genName(ButtonKind.SECONDARY, ButtonView.LIGHT),
  LIGHT_KINDS.secondary
)};
  ${mixins.kind(
  genName(ButtonKind.NEGATIVE, ButtonView.LIGHT),
  LIGHT_KINDS.negative
)};
  ${mixins.kind(
  genName(ButtonKind.PRIMARY, ButtonView.BORDER),
  BORDER_KINDS.primary
)};
  ${mixins.kind(
  genName(ButtonKind.SECONDARY, ButtonView.BORDER),
  BORDER_KINDS.secondary
)};

  ${mixins.kind(
  genName(ButtonKind.NEGATIVE, ButtonView.BORDER),
  BORDER_KINDS.negative
)};

  ${mixins.kind(
  genName(ButtonKind.PRIMARY, ButtonView.LINK),
  LINK_KINDS.primary
)};
  ${mixins.kind(
  genName(ButtonKind.SECONDARY, ButtonView.LINK),
  LINK_KINDS.secondary
)};

  ${mixins.size(ButtonSize.DEFAULT, SIZES.default)};
  ${mixins.size(ButtonSize.EXTRA_LARGE, SIZES.extra_large)};
  ${mixins.size(ButtonSize.LARGE, SIZES.large)};
  ${mixins.size(ButtonSize.SMALL, SIZES.small)};

  &.block {
    width: 100%;
  }

  &.loading {
    cursor: progress;
  }

  &&& {
    ${space};
    ${width};
    ${minWidth};
    ${maxWidth};
  }
`;

BaseButton.defaultProps = {
  type: 'button',
  kind: ButtonKind.PRIMARY,
  size: ButtonSize.DEFAULT,
};
