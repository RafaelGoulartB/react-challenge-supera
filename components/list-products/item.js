import { Text } from '@chakra-ui/react'
import ItemContainer from './item-container'

export default function ProductItem({ id, name, price, score, image }) {
  return (
    <ItemContainer>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </ItemContainer>
  )
}
