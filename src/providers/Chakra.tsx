import { ChakraProvider as ChakraUiProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ReactNode } from 'react'
import { THEME_COLOR_SCHEME, THEME_CONFIG } from 'config/theme'

interface Props {
  children: ReactNode
}

const theme = extendTheme(withDefaultColorScheme({ colorScheme: THEME_COLOR_SCHEME }), {
  ...THEME_CONFIG,
})

export function ChakraProvider(props: Props) {
  return (
    <CacheProvider>
      <ChakraUiProvider theme={theme}>{props.children}</ChakraUiProvider>
    </CacheProvider>
  )
}
