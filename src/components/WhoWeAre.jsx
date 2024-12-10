import React from 'react';
import './Who-we-are.css';
import WeAreMage from '../images/img1.png';
import CurveLine from '../images/curve-line.png';
import { GoArrowRight } from "react-icons/go";
import moneyBag from '../svg/Money-Bag.svg';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
  return (
    <div className='we_are_container'>
        <div className="we_are_main">
            <div className="we_are_left">
                <img className='img1' src={WeAreMage } alt="we are" />
            </div>

            <div className="we_are_right">
                <h3>Who Are We?</h3>
                <p className='p1'>Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.</p>

                <div className="text_box">
                    {/* <a href="#" className="register">
                        <p className='p3'>Register</p>
                        <GoArrowRight className="icon" />
                    </a> */}

                    <Link className="register">
                        <p className='p3'>Register</p>
                        <GoArrowRight className="icon" />
                    </Link>

                    <Link className="donate">
                        <p className='p3'>Donate</p>
                        <img src={moneyBag} alt="money icon" /> 
                    </Link>
                </div>

                <p className="bottom_p">Founder's Friday is more than just a meetup — it's a movement.</p>

                <div className="who-line-mage_box">
                    <img src={CurveLine} alt="curve line" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre;