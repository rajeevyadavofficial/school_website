// src/pages/Home.jsx
// import HeroSection from '../components/HeroSection';
import ImagePopup from '../components/ImagePopup';
import PrincipalMessage from '../components/PrincipalMessage';
import SchoolGallery from '../components/SchoolGallery';
// import MessageFromPrincipal from '../components/MessageFromPrincipal';
// import SchoolFeatures from '../components/SchoolFeatures';
// import Testimonials from '../components/Testimonials';
// import ContactCTA from '../components/ContactCTA';

const Home = () => {

  
  return (
    <div>
      {/* <HeroSection /> */}
      <SchoolGallery />
      <PrincipalMessage />
      {/* <MessageFromPrincipal />
      <SchoolFeatures />
      <Testimonials />
      <ContactCTA />  */}
    </div>
  );
};

export default Home;
