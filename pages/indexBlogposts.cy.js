import React from 'react'
import Blogposts from './index'

describe('<Blogposts />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Blogposts />)
  })
})