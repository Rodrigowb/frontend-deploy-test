// Import dependencies
import './Spec-carousel-style.css'
import Specialities from '../specialities/Specialities.jsx'
import seIcon from '../../images/se-icon.png'
import dsIcon from '../../images/ds-icon.png'
import uxIcon from '../../images/ux-icon.png'

// Function
function SpecCarousel() {
  // Return
  return (
    <div className='container'>
      <h1 className='title'>Specialities</h1>
      <div className='carousel'>
        <Specialities
          speciality={'Software Engineer'}
          image={seIcon}
          description={'Full stack web development'}
        />
        <Specialities
          speciality={'Data Scientist'}
          image={dsIcon}
          description={'Algorithmic financial trading'}
        />
        <Specialities
          speciality={'UX/UI Designer'}
          image={uxIcon}
          description={'Design thinking, wireframes and prototypes'}
        />
      </div>
    </div >
  )
}

// Export
export default SpecCarousel