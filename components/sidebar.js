import { Flex, Icon, Text } from '@chakra-ui/react'
import { AiFillHome } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <Flex
      display={{ sm: 'none', lg: 'flex' }}
      position="fixed"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="8%"
      maxW="120px"
      p="5"
      boxShadow="lg"
    >
      <Flex flexDir="column">
        <Link href="/">
          <Icon as={AiFillHome} mb="7" w={7} h={7} color="gray.400" />
        </Link>
        <Link href="/cart">
          <Flex flexDir="column" position="relative" w={8} h={12}>
            <Text
              position="absolute"
              top="0"
              right="0"
              backgroundColor="red.400"
              zIndex="1000"
              mb="1"
              alignSelf="flex-end"
              fontSize="xs"
              color="white"
              textAlign="center"
              w="16px"
              h="16px"
              borderRadius="16px"
            >
              0
            </Text>
            <Icon as={FaShoppingCart} w={7} h={7} color="gray.400" />
          </Flex>
        </Link>
      </Flex>
    </Flex>
  )
}
