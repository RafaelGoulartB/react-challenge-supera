import { useState } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import products from '../../data/products.json'
import ProductItem from './item'

export default function ListProducts() {
  const [isProductsSortedByName, setIsProductsSortedByName] = useState(false)
  const [isProductsSortedByPrice, setIsProductsSortedByPrice] = useState(false)
  const [isProductsSortedByScore, setIsProductsSortedByScore] = useState(false)

  const [productsState, setProductsState] = useState(products)

  function toggleSortStyle(sort) {
    setIsProductsSortedByScore(sort === 'score' ? true : false)
    setIsProductsSortedByPrice(sort === 'price' ? true : false)
    setIsProductsSortedByName(sort === 'name' ? true : false)
  }

  function toggleSort(sort) {
    toggleSortStyle(sort)

    switch (sort) {
      case 'name':
        setProductsState(
          products.sort((a, b) => {
            const name_a = a.name.toLowerCase()
            const name_b = b.name.toLowerCase()

            if (name_a < name_b) return -1
            if (name_a > name_b) return 1

            return 0
          })
        )
        break
      case 'price':
        setProductsState(products.sort((a, b) => a.price - b.price))
        break
      case 'score':
        setProductsState(products.sort((a, b) => b.score - a.score))
        break
    }
  }

  return (
    <Flex flexDir="column" alignItems="center">
      <Flex
        width="100%"
        dir="row"
        alignItems="center"
        justifyContent="space-evenly"
        bg="white"
        my={{ base: '4', lg: '12' }}
        mx={{ base: '6', lg: '0' }}
        px={{ base: '4', lg: '16' }}
        py="3"
        rounded="md"
        fontSize={{ base: 'sm', md: 'md' }}
        boxShadow="sm"
      >
        <Text
          color={isProductsSortedByName ? 'red.400' : 'gray.400'}
          fontWeight={isProductsSortedByName ? 'bold' : 'normal'}
          onClick={() => toggleSort('name')}
          _hover={{
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Alfabetica
        </Text>
        <Text
          color={isProductsSortedByPrice ? 'red.400' : 'gray.400'}
          fontWeight={isProductsSortedByPrice ? 'bold' : 'normal'}
          onClick={() => toggleSort('price')}
          _hover={{
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Preço
        </Text>
        <Text
          color={isProductsSortedByScore ? 'red.400' : 'gray.400'}
          fontWeight={isProductsSortedByScore ? 'bold' : 'normal'}
          onClick={() => toggleSort('score')}
          _hover={{
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Popularidade
        </Text>
      </Flex>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        mx="auto"
        mb={{ base: '28', lg: '8' }}
      >
        {productsState.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            score={product.score}
            image={product.image}
          />
        ))}
      </Flex>
    </Flex>
  )
}
