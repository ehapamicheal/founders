import React from 'react'
import './hero-section.css';
import { mageLink } from '../data';
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import HeroMage from '../images/hero-img2.png';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <div className='hero_section_container'>
        <div className="hero_section_main section">
            <div className="hero_section_left">
                <p className='p1'>Join our premier for start up and tech visionaries</p>

                <h3>Connect, Collaborate, Innovate!</h3>

                <div className="text_box">
                    <p className='p2'>Every last friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections and game-changing opportunities.</p>

                    <Link className="reg_link">
                        <p className="p3">Register For Our Next Event</p>
                        <RiArrowRightDoubleLine className="svg" />
                    </Link>

                    <p className='p4'>Join us for next meetup on the 26th of july 2024</p>
                </div>

                <div className="links_image_box">
                    {mageLink.map(mag => (
                        <Link className='links' key={mag.id}>
                            <img src={mag.icons} alt={`Icon ${mag.id}`} />
                        </Link>
                        
                    ))}
                </div>

                <div className="p5_box">
                   <p>Become a collaborator today</p>
                   <BsBoxArrowUpRight />
                </div>
            </div>

            <div className="hero_section_right">
                <img className='img1' src={HeroMage} alt="" />
            </div>

        </div>

    </div>
  )
}

export default HeroSection;