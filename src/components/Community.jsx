import React from 'react';
import './community.css';
import communityMage from '../images/img2.png';
import lineMage from '../images/line-img2.png';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';


const Community = () => {
  return (
    <div className="community_container">
        <div className="community_main">
            <div className="top_head">
                <h2>Register And Be a Part of Our Community</h2>
                <p className="p1">Join our community of over 1000+ founders, developers and tech junkies in general.</p>
                <p className="p2">Be inspired by people who live to inspire!</p>
            </div>

            <div className="mage_box">
                <img src={communityMage} alt="community" />

                <div className="line-mage_box2">
                    <div className="">
                        <img src={lineMage} alt="" />
                    </div>
                </div>
            </div>

            <div className="line-mage_box">
                <img src={lineMage} alt="" />
            </div>

        </div>

        <div className="reg_box">
            <Link className="register">
                <p>Register</p>
                <GoArrowRight className="icon" />
            </Link>
        </div>

    </div>
  )
}

export default Community;