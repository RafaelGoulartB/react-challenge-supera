/* eslint-disable no-undef */
import React from 'react'

import { render } from '../../test-utils'
import ProductItem from '../../../components/list-products/item'

describe('ProductItem', () => {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      name: 'Super Mario Odyssey',
      price: '197.88',
      image: 'super-mario-odyssey.png'
    }
  })

  test('should render name, price, and image', () => {
    const { getByText, getByAltText } = render(
      <ProductItem {...expectedProps} />
    )
    const name = getByText(expectedProps.name)
    const price = getByText(`R$${expectedProps.price}`)
    const image = getByAltText(expectedProps.name)

    expect(name).toBeVisible()
    expect(price).toBeVisible()
    expect(image).toBeInTheDocument()
  })
})
