// Importing the test dependencies and the components to be tested
import { cleanup, render, screen } from '@testing-library/react'
import SpecCarousel from './Spec-carousel'

// Unmount states before tests
afterEach(cleanup)

// Testing specialities carrousel functionality
describe('test the specialities carousel component', () => {
  it('render title', () => {
    render(<SpecCarousel />)
    const title = screen.getByText('Specialities')
    expect(title).toBeInTheDocument();
  })
})