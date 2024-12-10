import React from 'react';
import './sponsor.css';
import { FaArrowRight } from "react-icons/fa";

const Sponsor = () => {
  return (
    <div className='sponsor_container'>
        <h4 className='text'>Sponsor The Next Friday</h4>

        <div className="sponsor_main">
            <div className="sponsor_head">
                <h3>Why Sponsor</h3>
                <h3>Founders Friday?</h3>
            </div>

            <div className="sponsor_contents">
                <div className="sponsor_left">
                    <div className="left-content">
                        <div className="box">
                            <h4>Networking Opportunities</h4>
                            <p>Connect with industry leaders, founders, and potential partners.</p>
                        </div>

                        <div className="box2">
                            <h4>Community Impact</h4>
                            <p>Support the growth and development of the startup ecosystem.</p>
                        </div>

                        <div className="box2">
                            <h4>Brand <br /> Association</h4>
                            <p>Align your brand with innovation and entrepreneurial success.</p>
                        </div>

                        <div className="box">
                            <h4>Visibility</h4>
                            <p>Gain exposure to a targeted audience of young professionals and entrepreneurs.</p>
                        </div>

                    </div>
                </div>

                <div className="sponsor_right">
                    <div className="box">
                        <h4>How To Sponsor</h4>
                        <p className='p1'>Ready to Make an impact?</p>
                        <p className='p2'>Fill the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday</p>
                    </div>

                    <form action="">
                        <div className="input_wrapper">
                            <div className="input_box">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="Full name"  required/>
                            </div>

                            <div className="input_box">
                                <label htmlFor="company">Company <span>(Optional)</span></label>
                                <input type="text" placeholder="Company name"  required/>
                            </div>
                        </div>

                        <div className="input_wrapper">
                            <div className="input_box">
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder='Email'  required/>
                            </div>

                            <div className="input_box">
                                <label htmlFor="phone">Phone</label>
                                <input type='number' placeholder="Phone number"  required/>
                            </div>
                        </div>

                        <button type="submit" className="sponsor_btn">
                            <span>Sponsor</span>
                            <FaArrowRight  className="svg" />
                        </button>
                    </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Sponsor;