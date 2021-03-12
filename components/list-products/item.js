import { Flex, Text } from '@chakra-ui/react'

export default function ProductItem({ id, name, price, score, image }) {
  return (
    <Flex dir="column" mr="20" mb="20">
      <Text>{name}</Text>
      <Text>{price}</Text>
    </Flex>
  )
}
