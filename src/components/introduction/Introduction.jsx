// Import dependencies
import './Introduction-style.css'
import picture from '../../images/Profile-picture.jpg'

// Function
function Introduction() {
  // Return
  return (
    <div className='introduction'>
      <img className='profile-picture' alt="rodrigo profile" src={picture} />
      <h1>Hey there 👋</h1>
      <h2 className='intro-text'>I'm Rodrigo Wanderley...</h2>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rodrigo-wanderley">
        <button className='contact-button'>Contact Me</button>
      </a>
      <h2 className='catch-phrase'>Somewhere in west coast building software 🌎</h2>
      <hr className='split-line'></hr>
    </div >
  );
}

// Export function introduction
export default Introduction