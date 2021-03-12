import { Flex } from '@chakra-ui/react'

export default function SidebarContainer({ children }) {
  return (
    <Flex
      as="aside"
      bgColor="white"
      position="fixed"
      height={{ base: '80px', lg: '100vh' }}
      width={{ base: '100vw', lg: '120px' }}
      bottom="0"
      alignItems="center"
      justifyContent="center"
      p="5"
      boxShadow={{ base: 'xs', lg: 'lg' }}
    >
      {children}
    </Flex>
  )
}
