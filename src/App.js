import './App.css';
import Introduction from './components/introduction/Introduction.jsx';
import SpecCarousel from './components/spec-carousel/Spec-carousel.jsx';
import TechCarousel from './components/tech-carousel/Tech-carousel.jsx';
import Footer from './components/footer/Footer.jsx'

// Function
function App() {

  // Return
  return (
    <div>
      <Introduction />
      <SpecCarousel />
      <TechCarousel />
      <Footer
        text={'Developed by Rodrigo W.'} />
    </div>
  );
}

// Export 
export default App;
