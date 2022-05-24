// Import dependencies
import './Technologies-style.css'

//Function
function Technologies(props) {
  // Return
  return (
    <div className='technology-container'>
      <img className='technology-image' alt='technology' src={props.image} />
      <hr className='split-line container-line'></hr>
      <span className='technology-name'>{props.name}</span>
      <span className='technology-description'>{props.description}</span>
    </div>
  )
}

// Export
export default Technologies

