import React from 'react';
import './home.css';
import HeroSection from '../../components/HeroSection';
import FoundersFriday from '../../components/FoundersFriday';
import Sponsor from '../../components/Sponsor';
import Coming from '../../components/Coming';
import Community from '../../components/Community';
import AtFounders from '../../components/AtFounders';
import WhoWeAre from '../../components/WhoWeAre';
import Attendees from '../../components/Attendees';
import FAQs from '../../components/FAQs';
import FooterLogo from '../../svg/footer-logo.svg'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

  


const Home = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <FoundersFriday />
      <Sponsor />
      <Coming />
      <Community />
      <AtFounders />
      <Attendees />
      <FAQs />
      <div className="event_container">
        <img src={FooterLogo} alt="" />
        <div className="event_main">
          <h3>Want To Be A Part Of Abuja’s Biggest Tech Community</h3>

          {/* <a href="#" className="reg_link">
            <p>Register For Our Next Event</p>
            <RiArrowRightDoubleLine  className="icon-arrow" />
          </a> */}

          <Link className='reg_link'>
            <p>Register For Our Next Event</p>
            <RiArrowRightDoubleLine className='svg' />
          </Link>
            
        </div>
      </div>

      <Footer />
    </>


  )
}

export default Home;