import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Flex, useColorModeValue, Spacer, Heading, Popover, PopoverTrigger, PopoverContent, Text, Divider } from '@chakra-ui/react'
import { SITE_NAME } from 'config/site'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useUserLanguage } from '../../state/user/hooks'
import { useAppDispatch } from '../../state/index'
import { updateUserLanguage, UserLanguage } from '../../state/user/actions'
import { allLanguages } from '../../config'

interface Props {
  className?: string
}

export function Header(props: Props) {
  const className = props.className ?? ''
  const { i18n } = useTranslation()
  const language = useUserLanguage()
  const dispatch = useAppDispatch()
  const router = useRouter()

  const languageChange = (language: UserLanguage) => {
    dispatch(updateUserLanguage({ userLanguage: language }))
    const { pathname, asPath, query } = router
    dispatch(updateUserLanguage({ userLanguage: language }))
    router.push({ pathname, query }, asPath, { locale: language })
  }

  const currentLanguage = React.useMemo(() => {
    for (let i = 0; i < allLanguages.length; i++) {
      if (allLanguages[i].code === i18n.language) {
        return allLanguages[i].language
      }
    }
    return 'English'
  }, [i18n.language])

  return (
    <Flex as="header" className={className} bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2} mb={8} alignItems="center">
      <LinkComponent href="/">
        <Heading as="h1" size="md">
          {SITE_NAME}
        </Heading>
      </LinkComponent>
      <Spacer />
      <Flex alignItems="center" gap={4}>
        <ConnectButton />
        <ThemeSwitcher />
        <Popover placement="bottom" closeOnBlur={true} trigger="hover">
          <PopoverTrigger>
            <Text color={useColorModeValue(`gray.600`, `gray.400`)} cursor={'pointer'}>
              {currentLanguage}
            </Text>
          </PopoverTrigger>
          <PopoverContent bg="white" width="120px" sx={{ outline: 'none' }}>
            {allLanguages.map((lng, index) => {
              return (
                <Text key={index} my="8px" mx="5px" cursor={'pointer'} onClick={() => languageChange(lng?.code as UserLanguage)}>
                  {lng.language}
                </Text>
              )
            })}
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  )
}
