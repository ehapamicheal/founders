import React from 'react'
import './at-founders.css';
import { GoArrowRight } from "react-icons/go";
import FounderMage from '../images/img3.png'
import { Link } from 'react-router-dom';

const AtFounders = () => {
  return (
    <div className='at_founders_container'>
        <div className="at_founders_main">
            <div className="at_founders_left">
                <img className='img1' src={FounderMage} alt="founders" />
            </div>

            <div className="at_founders_right">
                <h3>At Founder’s Friday, Every Friday Is a Learning Experience!</h3>
                <p className='p1'>Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.</p>

                <div className="text_box">
                    <Link className="register">
                        <p className='p3'>Register</p>
                        <GoArrowRight className='svg' />
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AtFounders;