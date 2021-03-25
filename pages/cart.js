import { useContext } from 'react'
import { Divider, Flex, Heading, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import PageContainer from '../components/page-container'
import ListCart from '../components/list-cart'
import products from '../data/products.json'
import { CartContext } from '../contexts/cart'
import { FieldLabel, FieldText } from '../components/list-products/item'
import { CgCheckO } from 'react-icons/cg'
import Link from 'next/link'

export default function Cart() {
  const { onCart } = useContext(CartContext)

  const productsFiltered = products.filter(product =>
    onCart.includes(product.id)
  )

  function calculateSubTotal() {
    const value = productsFiltered
      .reduce(
        (accumulator, currentProduct) => accumulator + currentProduct.price,
        0
      )
      .toFixed(2)

    return value
  }

  function calculateFrete() {
    const value = onCart.length * 10
    const freeFreteValue = 250

    if (calculateSubTotal() >= freeFreteValue) return 0

    return value
  }

  const subTotal = calculateSubTotal()
  const frete = calculateFrete()
  const total = (+subTotal + frete).toFixed(2)

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
              <FieldText>R$ {subTotal}</FieldText>
            </Flex>
            <Flex flexDir="row" alignItems="center" mb="2">
              <FieldLabel>Frete</FieldLabel>
              <FieldText>{frete ? `R$ ${frete}` : 'Frete Grátis'}</FieldText>
            </Flex>
            <Divider my="6" />
            <Flex flexDir="row" alignItems="center" mb="4" color="green">
              <FieldLabel>Total</FieldLabel>
              <FieldText>R$ {total}</FieldText>
            </Flex>

            <Link href="/success">
              <Button
                leftIcon={<CgCheckO />}
                colorScheme="teal"
                variant="solid"
                mt="4"
                mb="8"
              >
                Finalizar Compra
              </Button>
            </Link>
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
