import Icon from '@chakra-ui/icon'
import { Flex, Text } from '@chakra-ui/layout'
import { useContext, useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { CartContext } from '../contexts/cart'

function Success() {
  const { clearCart } = useContext(CartContext)

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <Flex
      flexDir="column"
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Icon as={FaCheckCircle} mb="8" color="green.600" w={16} h={16} />
      <Text
        color="green.600"
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
      >
        Compra Realizada com Sucesso
      </Text>
    </Flex>
  )
}

export default Success
