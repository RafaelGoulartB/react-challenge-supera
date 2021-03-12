import { useContext } from 'react'
import { Divider, Flex, Heading, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import PageContainer from '../components/page-container'
import ListCart from '../components/list-cart'
import products from '../data/products.json'
import { CartContext } from '../contexts/cart'
import { FieldLabel, FieldText } from '../components/list-products/item'
import { CgCheckO } from 'react-icons/cg'

export default function Cart() {
  const { onCart } = useContext(CartContext)

  const productsFiltered = products.filter(product =>
    onCart.includes(product.id)
  )

  const subTotal = 100
  const frete = 10
  const total = 110

  return (
    <PageContainer>
      <Heading my="8">Seu Carinho</Heading>
      {onCart.length ? (
        <Flex
          flexDir={{ base: 'column-reverse', lg: 'column-reverse' }}
          mb={{ base: '28', lg: '8' }}
        >
          <ListCart products={productsFiltered} />

          <Divider mb="8" />

          {/* Checkout */}
          <Flex flexDir="column">
            <Flex flexDir="row" alignItems="center" mb="2">
              <FieldLabel>Sub-Total</FieldLabel>
              <FieldText>R${subTotal}</FieldText>
            </Flex>
            <Flex flexDir="row" alignItems="center" mb="2">
              <FieldLabel>Frete</FieldLabel>
              <FieldText>R${frete}</FieldText>
            </Flex>
            <Divider my="6" />
            <Flex flexDir="row" alignItems="center" mb="4" color="green">
              <FieldLabel>Total</FieldLabel>
              <FieldText>R${total}</FieldText>
            </Flex>

            <Button
              leftIcon={<CgCheckO />}
              colorScheme="teal"
              variant="solid"
              mt="4"
              mb="8"
            >
              Finalizar Compra
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Text mt="24" color="gray.500" textAlign="center" fontSize="2xl">
          Você ainda não adiconou produtos ao carinho.
        </Text>
      )}
    </PageContainer>
  )
}
