import { Box } from '@chakra-ui/react'

export default function ItemContainer({ children }) {
  return (
    <Box
      as="article"
      display="flex"
      flexDir="column"
      alignItems="center"
      p="8"
      bg="white"
      borderRadius="lg"
      m="3"
      width={{ base: '320px', xl: '360px' }}
      flexGrow={{ sm: 1, lg: 0 }}
      boxShadow="0px 0px 20px rgb(231, 231, 231)"
      transition="all 0.6s"
      _hover={{
        transform: 'scale(1.03)'
      }}
    >
      {children}
    </Box>
  )
}
