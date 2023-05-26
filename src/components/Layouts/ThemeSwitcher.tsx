import React, { useEffect } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useAppDispatch } from '../../state/index'
import { updateUserTheme, UserTheme } from '../../state/user/actions'

interface Props {
  className?: string
}

export function ThemeSwitcher(props: Props) {
  const className = props.className ?? ''
  const dispatch = useAppDispatch()
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    if (colorMode) {
      dispatch(updateUserTheme({ userTheme: colorMode as UserTheme }))
    }
  }, [colorMode, dispatch])

  return (
    <Box className={className} onClick={toggleColorMode} _hover={{ cursor: 'pointer' }}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Box>
  )
}
