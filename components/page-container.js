import { Flex } from '@chakra-ui/react'

export default function PageContainer({ children }) {
  return (
    <Flex
      as="main"
      flexDir="column"
      w={{ sm: '100%', lg: '85%' }}
      mx="auto"
      paddingX={{ sm: '10', lg: '8' }}
      boxSizing="border-box"
    >
      {children}
    </Flex>
  )
}
