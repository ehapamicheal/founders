import React from 'react'
import "./coming.css";
import FounderLogo from '../images/icon-img.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Coming = () => {
  return (
    <div className='coming_container'>
        <div className="coming_main">
            <div className="coming_left">
                <h4 className='h-4'>Founders Friday is coming to</h4>

                <div className="place_box">
                    <div className="box_wrapper">
                        <h3>Abuja</h3>
                        <h3>Kaduna</h3>
                        <h3>Kano</h3>
                    </div>
                </div>

                <div className="text_box">
                    <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices blandit felis non sollicitudin. Nulla facilisi. Curabitur vel metus blandit, facilisis massa quis, ultrices ligula. Duis suscipit sed justo et bibendum. Nam feugiat, dui in consectetur sagittis, diam urna blandit nisl, ac venenatis augue diam vel ligula. Donec gravida.</p>
                    <Link className="register">
                        <p className='p3'>Register</p>
                        <FaArrowRightLong className="svg" />
                    </Link>
                </div>

            </div>

            <div className="coming_right">
                <img className='img1' src={FounderLogo} alt="comimg logo" />
            </div>
        </div>

    </div>
  )
}

export default Coming;