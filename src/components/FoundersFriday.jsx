import React from 'react';
import './founders.css';
import { FaArrowRight } from "react-icons/fa";
import FounderMage from '../images/img3.png';
import { Link } from 'react-router-dom';

const FoundersFriday = () => {
  return (
    <div className='founders_container'>
        <div className="founders_main section">
            <div className="founders_left">
                <p className='p1'>Founders Friday</p>

                <h3>What Happens At Founders Friday</h3>

                <div className="text_box">
                    <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices blandit felis non sollicitudin. Nulla facilisi. Curabitur vel metus blandit, facilisis massa quis, ultrices ligula. Duis suscipit sed justo et bibendum. Nam feugiat, dui in consectetur sagittis, diam urna blandit nisl, ac venenatis augue diam vel ligula. Donec gravida.</p>

                    <Link className="learn_more">
                        <p className='p3'>Learn More</p>
                        <FaArrowRight className='svg' />
                    </Link>
                </div>

            </div>

            <div className="founders_right">
                <img className='img1' src={FounderMage} alt="founders" />
            </div>
        </div>

    </div>
  )
}

export default FoundersFriday;