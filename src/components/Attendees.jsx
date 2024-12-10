import React from 'react'
import './attendees.css';
import { attendees } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Attendees = () => {
  return (
    <div className="attendees_container">
        <div className="attendees_main">
            <div className="top-head">
                <h2>What Do Our Attendees Have To Say?</h2>
                <p>Well See For Yourself!</p>
            </div>

            <div className="slider_container">
                <div className="swiper-buttons">
                    <div className="swiper-button-prev">
                    </div>
                    <div className="swiper-button-next">
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 15 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                >
                    {attendees.map((box) => (
                    <SwiperSlide key={box.id} className="box_content">
                        <div className="box1">
                           <img className="mage" src={box.mage} alt={box.title} />
                        </div>
                        <div className="box2">
                            <h4 className="title">{box.title}</h4>
                            <p className="remark">{box.remark}</p>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </div>
    </div>
  )
}

export default Attendees;

