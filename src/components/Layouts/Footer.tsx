import { Flex, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { LinkComponent } from './LinkComponent'

interface Props {
  className?: string
}

export function Footer(props: Props) {
  const className = props.className ?? ''

  return (
    <Flex as="footer" className={className} flexDirection="column" justifyContent="center" alignItems="center" my={8}>
      <Text>Footer</Text>
    </Flex>
  )
}
