import React from 'react';
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import dynamic from 'next/dynamic';

const ImageSlider = dynamic(() => import('@/components/ImageSlider'), { ssr: false });
const ProductSlider = dynamic(() => import('@/components/ProductSlider'), { ssr: false });

export const revalidate = 0;

const HomePage = async () => {
  try {
    const featuredProducts = await getProducts({ isFeatured: true });
    const allProducts = await getProducts({});
  
    return (
      <Container>
        <div className="space-y-10 pb-10">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Produits populaires" items={featuredProducts} />
          </div>
          <ProductSlider products={allProducts} />
        </div>
      </Container>
    );
  } catch (error) {
    console.error('Erreur lors du rendu de la page d\'accueil:', error);
    return <div>Erreur lors du chargement des produits.</div>;
  }
};

export default HomePage;