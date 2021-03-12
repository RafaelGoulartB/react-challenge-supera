import { useState } from 'react'
import Image from 'next/image'
import { Text, Flex, Heading, Button } from '@chakra-ui/react'
import ItemContainer from './item-container'
import { FaShoppingCart } from 'react-icons/fa'

export default function ProductItem({ id, name, price, score, image }) {
  const [isInCart, setIsInCart] = useState(false)

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

      {isInCart ? (
        <Button
          leftIcon={<FaShoppingCart />}
          colorScheme="red"
          variant="solid"
          onClick={() => setIsInCart(!isInCart)}
        >
          Remove do Carrinho
        </Button>
      ) : (
        <Button
          leftIcon={<FaShoppingCart />}
          colorScheme="teal"
          variant="solid"
          onClick={() => setIsInCart(!isInCart)}
        >
          Adicionar ao Carrinho
        </Button>
      )}
    </ItemContainer>
  )
}

const FieldLabel = ({ children }) => {
  return (
    <Text fontSize="md" fontWeight="bold" mr="3">
      {children}:
    </Text>
  )
}
const FieldText = ({ children }) => {
  return (
    <Heading as="h3" fontSize="md" fontWeight="light" lineHeight="1.4rem">
      {children}
    </Heading>
  )
}
