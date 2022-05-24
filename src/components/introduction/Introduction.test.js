// Importing the test dependencies and the component to be tested
import { cleanup, render, screen } from '@testing-library/react'
import Introduction from './Introduction.jsx'

// Unmount states before the tests
afterEach(cleanup)

// Testing the Introduction component
describe('test the introduction component', () => {
  it('render greetings', () => {
    render(<Introduction />)
    const greetings = screen.getByText('Hey there 👋')
    expect(greetings).toBeInTheDocument();
  })

  it('render introduction', () => {
    render(<Introduction />)
    const introduction = screen.getByText("I'm Rodrigo Wanderley...")
    expect(introduction).toBeInTheDocument();
  })

  it('redirect button to the right link', () => {
    render(<Introduction />)
    const button = screen.getByText('Contact Me')
    expect(button.closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/rodrigo-wanderley')
  })

  it('redirect button is opening a new tab when the button is clicked', () => {
    render(<Introduction />)
    const button = screen.getByText('Contact Me')
    expect(button.closest('a')).toHaveAttribute('target', '_blank')
  })

  it('render catch phrase', () => {
    render(<Introduction />)
    const phrase = screen.getByText('Somewhere in west coast building software 🌎')
    expect(phrase).toBeInTheDocument();
  })

})