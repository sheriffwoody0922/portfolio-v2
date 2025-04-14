
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper';
import SectionHeader from "../UI/SectionHeader";

import 'swiper/swiper.css';
import Image01 from '../../assets/img/Image01.png'
import Image02 from '../../assets/img/Image02.png'
import Image03 from '../../assets/img/Image03.png'
import Image04 from '../../assets/img/Image04.png'
import Image05 from '../../assets/img/Image05.png'
import Image06 from '../../assets/img/Image06.png'

import "./family.css"
const Family = props => {
    return (
        <div class="flex flex-wrap gap-10 justify-evenly max-w-8xl mx-auto">
            <SectionHeader text={'My Family'} headerGradientStyle={'header-blog-posts'} />
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                initialSlide={2}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Image01} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image02} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image03} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image04} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image05} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image06} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Family;