import { useContext } from 'react'
import { Flex, Icon, Text } from '@chakra-ui/react'
import { AiFillHome } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'
import SidebarContainer from './container'
import { CartContext } from '../../contexts/cart'

export default function Sidebar() {
  const { onCart } = useContext(CartContext)

  return (
    <SidebarContainer>
      <Flex as="nav" flexDir={{ base: 'row', lg: 'column' }}>
        <Link href="/">
          <Icon
            as={AiFillHome}
            mb={{ base: '0', lg: '12' }}
            mr={{ base: '16', lg: '0' }}
            w={7}
            h={7}
            color="gray.400"
          />
        </Link>
        <Link href="/cart">
          <Flex flexDir="column" position="relative" w={8}>
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
              {onCart.length}
            </Text>
            <Icon as={FaShoppingCart} w={7} h={7} color="gray.400" />
          </Flex>
        </Link>
      </Flex>
    </SidebarContainer>
  )
}
