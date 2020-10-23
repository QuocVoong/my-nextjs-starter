import { css } from 'styled-components';

export const ellipsis = (alway = false) =>
  alway
    ? css`
        white-space: pre;
        overflow: hidden;
        text-overflow: ellipsis;
      `
    : css`
        &.ellipsis {
          white-space: pre;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `;

export const buildTemplate = (key) => (
  name,
  template,
) => css`
  &.${key}-${name} {
    ${template};
  }
`;

export const size = buildTemplate('size');

export const kind = buildTemplate('kind');

export const layout = buildTemplate('layout');

export const type = buildTemplate('type');

export const role = buildTemplate('role');
