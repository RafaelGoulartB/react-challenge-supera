import { useContext } from 'react'
import Image from 'next/image'
import { Text, Flex, Heading, Button } from '@chakra-ui/react'
import ItemContainer from './item-container'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../../contexts/cart'

export default function ProductItem({ id, name, price, image }) {
  const { onCart, addToCart, removeFromCart } = useContext(CartContext)

  return (
    <ItemContainer>
      <Image
        src={`/assets/${image}`}
        width={320}
        height={300}
        alt={name}
        quality={100}
      />
      {/* Texts */}
      <Flex flexDir="column" alignItems="flex-start">
        <Flex flexDir="column" mb="8">
          <Heading
            as="h2"
            fontSize="lg"
            alignSelf="center"
            textAlign="center"
            lineHeight="1.4rem"
            my="6"
          >
            {name}
          </Heading>
          <Flex flexDir="row" justifyContent="center" alignItems="center">
            <FieldLabel>Preço</FieldLabel>
            <FieldText>R${price}</FieldText>
          </Flex>
        </Flex>
      </Flex>

      {onCart.includes(id) ? (
        <Button
          leftIcon={<FaShoppingCart />}
          colorScheme="red"
          variant="solid"
          onClick={() => removeFromCart(id)}
        >
          Remover do Carrinho
        </Button>
      ) : (
        <Button
          leftIcon={<FaShoppingCart />}
          colorScheme="teal"
          variant="solid"
          onClick={() => addToCart(id)}
        >
          Adicionar ao Carrinho
        </Button>
      )}
    </ItemContainer>
  )
}

export const FieldLabel = ({ children }) => {
  return (
    <Text fontSize="md" fontWeight="bold" mr="3">
      {children}:
    </Text>
  )
}
export const FieldText = ({ children }) => {
  return (
    <Heading as="h3" fontSize="md" fontWeight="light" lineHeight="1.4rem">
      {children}
    </Heading>
  )
}
