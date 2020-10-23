const colors = {
  primary: '#2ad25f',
  medium: '#14602c',
  dark: '#0e223d',
  red: '#e2574c',
  green: '#4dac4a',
  orange: '#f29132',
  yellow: '#f8e71c',
  white: '#ffffff',
  black: '#343434',
  grey: '#434343',

  primary100: '#2ad25f',
  primary85: '#64de8a',
  primary75: '#77e29a',
  primary65: '#9feab6',
  primary45: '#bceecb',
  primary35: '#d8f6e2',
  primary15: '#ebfbf0',
  primary5: '#f3fff7',

  medium100: '#14602c',
  medium85: '#177334',
  medium75: '#1b863d',
  medium65: '#1f9946',
  medium35: '#27bf57',
  medium15: '#0ec648',

  slat100: '#4f5e71',
  slat85: '#657283',
  slat75: '#a7aeb8',
  slat65: '#d3d6db',
  slat45: '#e9eaed',
  slat25: '#f3f3f5',
  slat15: '#f4f5f5',
  slat5: '#f8f8f9',

  dark100: '#0e223d',
  dark85: '#23364e',
  dark75: '#394a60',
  dark65: '#3c5264',
  dark25: '#b6bdb9',

  yellow100: '#f8e71c',
  yellow15: '#fefcdd',

  yellowGO: '#bb9b1b',
  yellowGOLight: '#f9f191',

  red100: '#e2574c',
  red85: '#dc3e31',
  red45: '#f2b3ae',
  red25: '#f8d5d2',
  red5: '#fdf3f2',

  grey100: '#434343',
  grey85: '#656565',
  grey75: '#878787',
  grey65: '#a5a5a5',
  grey45: '#bababa',
  grey25: '#dcdcdc',
  grey15: '#ededed',
  grey5: '#f7f7f7',
  grey1: '#fbfbfb',
  greyBlue: '#698194',
  black100: '#343434',

  bird100: '#5f7d95',
  bird85: '#7d95a8',
  bird75: '#93a8b9',
  bird65: '#afbeca',
  bird45: '#d4dfe7',
  bird25: '#e0e6ea',
  bird15: '#e3ebf1',
  bird5: '#ebf0f4',
  bird3: '#eef3f6',
  bird2: '#f3f7fa',
  bird1: '#f9fafb',
}

const space = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40]

const breakpoints = ['40em', '52em', '64em', '80em']

const zIndices = {
  header: 100,
  nav: 200,
  mainScroll: 300,
}

const shadows = {
  error: `inset 0 0 0 1px ${colors.red}`,
  success: `inset 0 0 0 1px ${colors.primary}`,
  warning: `inset 0 0 0 1px ${colors.orange}`,
  info: `inset 0 0 0 1px ${colors.grey65}`,
  default: `inset 0 0 0 1px ${colors.bird45}`,
  disabled: `inset 0 0 0 1px ${colors.grey15}`,
}

export const themeBase = {
  name: 'MyApp',
  colors,
  space,
  breakpoints,
  shadows,
  zIndices,
}
