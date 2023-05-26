import { ThemingProps } from '@chakra-ui/react'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
  colors: {
    light: {
      primary: '#f7fafc',
      text: '#edf2f7',
      background: '#e2e8f0',
    },
  },
  // add other theme config here
}
