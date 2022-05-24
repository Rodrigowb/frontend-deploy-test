// Import the test dependencies and the components to be tested
import { cleanup, render, screen } from '@testing-library/react'
import TechCarousel from './Tech-carousel'

// Unmout the states before tests
afterEach(cleanup)

// Testing technologies carousell functionalities
describe('testing the technologies carousek component', () => {
  it('render title', () => {
    render(<TechCarousel />)
    const title = screen.getByText('Technologies')
    expect(title).toBeInTheDocument();
  })
})