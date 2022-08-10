import React from 'react'
import { Carousel as CarouselAntd } from 'antd';

const contentStyle = {
    with: '100%',
    height: '550px',
    objectFit: 'cover',
    margin: 'auto',
  };

export default function Carousel() {
    const onChange = (currentSlide) => {
      };
    
      return (
        <CarouselAntd autoplay={true} afterChange={onChange}>
          <div>
            <img style={contentStyle} src='./img/gozila.jpg'/>
          </div>
          <div>
            <img style={contentStyle} src='./img/avengers-end-game-4k-banner-cb-2560x1080.jpg'/>
          </div>
          <div>
            <img style={contentStyle} src='./img/wallpapersden.com_aladdin-2019-movie-banner-8k_2560x1080.jpg'/>
          </div>
          <div>
            <img style={contentStyle} src='./img/Warcraft-banner.jpg'/>
          </div>
        </CarouselAntd>
      );
}
