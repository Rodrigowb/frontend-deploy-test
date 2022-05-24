// Import dependencies
import './Tech-carousel-style.css'
import Technologies from '../technologies/Technologies'

// Function
function TechCarousel() {
  // Return 
  return (
    <div className='container'>
      <h1 className='title'>Technologies</h1>
      <div className='tech-carousel'>
        <Technologies
          image={'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-plain.svg'}
          name={'Python'}
          description={'Backend/Data analysis'} />
        <Technologies
          image={'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain-wordmark.svg'}
          name={'Node.js'}
          description={'Backend/Frontend'} />
        <Technologies
          image={'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg'}
          name={'Java Script'}
          description={'Backend/Frontend'} />
        <Technologies
          image={'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg'}
          name={'ReactJs'}
          description={'Frontend'} />
        <Technologies
          image={'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain-wordmark.svg'}
          name={'HTML'}
          description={'Frontend'}
        />
        <Technologies
          image={'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain-wordmark.svg'}
          name={'CSS'}
          description={'Frontend'} />
        <Technologies
          image={'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/django/django-plain-wordmark.svg'}
          name={'Django'}
          description={'Backend'} />
        <Technologies
          image={'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-plain-wordmark.svg'}
          name={'PostgreSQL'}
          description={'Database'} />
        <Technologies
          image={'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-plain-wordmark.svg'}
          name={'MongoDB'}
          description={'Database'} />
        <Technologies
          image={'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/figma/figma-original.svg'}
          name={'Figma'}
          description={'Wireframe/Prototype'} />
        <Technologies
          image={'https://raw.githubusercontent.com/Workshape/tech-icons/72fd0e4dc0320a84dc489d9dd8f63338926098e0/icons/git.svg'}
          name={'Git'}
          description={'Version Control System'} />
      </div>
    </div>
  )
}

// Export
export default TechCarousel