import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import ThemeContainer from '../contexts/theme/theme-container'
import seoConfig from '../config/seo'
import Sidebar from '../components/sidebar/'
import { Flex } from '@chakra-ui/react'
import { CartProvider } from '../contexts/cart'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeContainer>
        <CartProvider>
          <DefaultSeo {...seoConfig} />
          <Flex dir={{ base: 'column', lg: 'row' }}>
            <Sidebar />
            <Component {...pageProps} />
          </Flex>
        </CartProvider>
      </ThemeContainer>
    </>
  )
}

export default MyApp
