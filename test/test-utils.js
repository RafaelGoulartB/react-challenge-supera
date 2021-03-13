import { render } from '@testing-library/react'
import ThemeContainer from '../contexts/theme/theme-container'
import '@testing-library/jest-dom'
import { CartProvider } from '../contexts/cart'

const TestProvider = ({ children }) => {
  return (
    <ThemeContainer>
      <CartProvider>{children}</CartProvider>
    </ThemeContainer>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options })

export * from '@testing-library/react'
export { customRender as render }
