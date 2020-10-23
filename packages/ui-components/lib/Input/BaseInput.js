import styled, { css } from 'styled-components';
import { space }       from 'styled-system';
import classnames      from 'classnames';
import { mixins }      from '../../styles';

export const SIZES = {
  small:   css`
    height: 24px;
    font-size: 14px;
    font-weight: normal;
    line-height: 16px;
  `,
  default: css`
    height: 32px;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
  `,
  large:   css`
    height: 40px;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
  `,
};

export const KINDS = {
  error:   css`
    box-shadow: ${({ theme }) => theme.shadows.error};
  `,
  success: css`
    box-shadow: ${({ theme }) => theme.shadows.success};
  `,
  warning: css`
    box-shadow: ${({ theme }) => theme.shadows.warning};
  `,
  info:    css`
    box-shadow: ${({ theme }) => theme.shadows.info};
  `,
};

export const InputSize = {
  SMALL:   'small',
  DEFAULT: 'default',
  LARGE:   'large'
};

export const InputKind = {
  ERROR:   'error',
  SUCCESS: 'success',
  WARNING: 'warning',
  INFO:    'info',
};

export const BaseInput = styled.input.attrs(
  ({ inputSize, kind }) => ({
    className: classnames({
      [`size-${inputSize}`]: inputSize,
      [`kind-${kind}`]:      kind,
    }),
  })
)`
  border-radius: 3px;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.bird45};
  background-color: #ffffff;
  padding: 8px 12px;
  width: 100%;
  outline: none;
  border: none;
  appearance: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.bird65};
  }

  &:hover {
    cursor: text;
  }

  &:focus {
    cursor: text;
    box-shadow: ${({ theme }) => theme.shadows.success};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.grey45};
    box-shadow: ${({ theme }) => theme.shadows.disabled};
    background-color: ${(props) => props.theme.colors.grey5};
  }

  &:-webkit-autofill {
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.yellow100};
    background-color: rgba(248, 231, 28, 0.11);
  }

  ${mixins.size(InputSize.LARGE, SIZES.large)};
  ${mixins.size(InputSize.DEFAULT, SIZES.default)};
  ${mixins.size(InputSize.SMALL, SIZES.small)};
  ${mixins.kind(InputKind.ERROR, KINDS.error)};
  ${mixins.kind(InputKind.SUCCESS, KINDS.success)};
  ${mixins.kind(InputKind.WARNING, KINDS.warning)};
  ${mixins.kind(InputKind.INFO, KINDS.info)};
  
  && {
    ${space};
  }
`;

BaseInput.defaultProps = {
  inputSize: InputSize.DEFAULT,
};
