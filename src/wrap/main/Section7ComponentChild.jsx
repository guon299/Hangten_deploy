import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar }from 'swiper/modules'

export default function Section7ComponentChild({n, slide}) {

    console.log(n);
    
    return (
        <div className="swiper-container">
            <Swiper
                navigation={false}
                modules={[Scrollbar]}
                spaceBetween={5}
                slidesPerView={3}
                scrollbar={{draggable: true, snapOnRelease: true, dragClass:'swiper-scrollbar-drag', width:'50%'}}
                >
                {
                    slide.map((item, idx)=>{
                        return (
                            <SwiperSlide className={`slide slide${idx}`} key={item.num}>
                                <div className="image-box">
                                    <a href="!#">
                                        <img src={`./images/main/section7/${item.image}`} alt="" />
                                    </a>
                                </div>
                                <div className="description">
                                    <a href="!#">
                                        <p>{item.description}</p>
                                    </a>
                                    <h4 className="price">{item.price}</h4>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};
