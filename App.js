import React, { useState, useEffect  } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function App() {

  const [banners, setBanners] = useState([]);
  
  useEffect(() => { 
    fetch(`/api/banner`, {
      method: 'GET',
      mode: 'no-cors', 
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( response => response.json() )
    .then( data =>  {
      console.log(data);
      setBanners(data)
    });
  }, [])
 
  return (
    <>
      { banners.length > 0 ?   
          <Swiper className="mySwiper" shouldSwiperUpdate> 
            {
              banners.map((item, index) => {
                return (
                  <SwiperSlide key={index}> 
                    <img src={item.path} alt="kerala" className="location-poster" />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>  
        : 
          <h2>Loading Banner</h2>
      }
    </>
  )
}
