import Image from 'next/image'
import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import { FieldLabel, FieldText } from '../list-products/item'

function ListCart({ products }) {
  const { removeFromCart } = useContext(CartContext)

  return (
    <Flex
      flexDir="row"
      flexWrap="wrap"
      justifyContent="center"
      mx="auto"
      mb={{ base: '28', lg: '8' }}
    >
      {products.map(product => (
        <Box
          key={product.id}
          as="article"
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="space-evenly"
          p="8"
          bg="white"
          borderRadius="lg"
          m="3"
          width={{ base: '300px' }}
          minW="320px"
          flexGrow={{ sm: 1, lg: 0 }}
          boxShadow="0px 0px 20px rgb(231, 231, 231)"
          position="relative"
          transition="all 0.6s"
          _hover={{
            transform: 'scale(1.02)'
          }}
        >
          <Image
            src={`/assets/${product.image}`}
            width={140}
            height={120}
            alt={product.name}
            quality={100}
          />
          <Flex flexDir="column" mb="8">
            <Heading
              as="h2"
              fontSize="lg"
              alignSelf="center"
              textAlign="center"
              lineHeight="1.4rem"
              my="6"
            >
              {product.name}
            </Heading>
            <Flex flexDir="row" justifyContent="center" alignItems="center">
              <FieldLabel>Preço</FieldLabel>
              <FieldText>R${product.price}</FieldText>
            </Flex>
          </Flex>

          <IconButton
            position="absolute"
            right="15px"
            top="15px"
            size="xs"
            colorScheme="red"
            aria-label="Remove From Cart"
            icon={<FaTrash />}
            onClick={() => removeFromCart(product.id)}
          />
        </Box>
      ))}
    </Flex>
  )
}

export default ListCart
