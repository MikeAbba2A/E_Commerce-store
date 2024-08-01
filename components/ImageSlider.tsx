import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const ImageSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="/images/chaussure.jpg" alt="Slide 1" />
            </div>
            <div>
                <img src="/images/vetement.jpg" alt="Slide 2" />
            </div>
            <div>
                <img src="/images/pizza_9.png" alt="Slide 3" />
            </div>
        </Slider>
    );
}

export default ImageSlider;