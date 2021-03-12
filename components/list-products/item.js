import Image from 'next/image'
import { Text, Flex, Heading } from '@chakra-ui/react'
import ItemContainer from './item-container'

export default function ProductItem({ id, name, price, score, image }) {
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
        <Flex flexDir="column" minH={{ sm: 'none', lg: '280px' }}>
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
