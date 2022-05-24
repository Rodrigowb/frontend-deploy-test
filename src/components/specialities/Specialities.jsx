// Import dependencies 
import './Specialities-style.css'

// Function
// Receive three props: speciality, image and description
function Specialities(props) {
  // Return 
  return (
    <div className='speciality-container'>
      <div className='upper-container'>
        <span className='speciality'>{props.speciality}</span>
        <img className='image' src={props.image} />
      </div>
      <div className='lower-container'>
        <span className='description'>{props.description}</span>
      </div>
    </div>
  )
}

// Export 
export default Specialities
