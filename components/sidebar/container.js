import { Flex } from '@chakra-ui/react'

export default function SidebarContainer({ children }) {
  return (
    <Flex
      as="aside"
      bgColor="#fafafa"
      position="fixed"
      height={{ sm: '80px', lg: '100vh' }}
      width={{ sm: '100vw', lg: '120px' }}
      bottom="0"
      alignItems="center"
      justifyContent="center"
      p="5"
      boxShadow={{ sm: 'xs', lg: 'lg' }}
    >
      {children}
    </Flex>
  )
}
