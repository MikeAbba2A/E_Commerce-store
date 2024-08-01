import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ui/product-card'; 
import { Product } from '@/types'; 

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Produits Populaires</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard data={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;