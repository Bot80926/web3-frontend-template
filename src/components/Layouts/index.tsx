import React, { ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Header } from './Header'
import { useFetchWalletBalance } from '../../state/balances/fetchBalance'

interface Props {
  children: ReactNode
}

export function Layout(props: Props) {
  // auto refresh wallet balance
  useFetchWalletBalance()

  return (
    <Box margin="0 auto" minH="100vh">
      <Header />
      <Container maxW="container.lg">{props.children}</Container>
    </Box>
  )
}
