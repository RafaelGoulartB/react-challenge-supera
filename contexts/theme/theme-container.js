import { ChakraProvider } from '@chakra-ui/react'

import theme from '../../styles/theme/'

const ThemeContainer = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      {children}
    </ChakraProvider>
  )
}

export default ThemeContainer
