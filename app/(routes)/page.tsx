// import getBillboard from "@/actions/get-billboard";
// import Billboard from "@/components/billboard";
import React from 'react';
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import dynamic from 'next/dynamic';

const ImageSlider = dynamic(() => import('@/components/ImageSlider'), { ssr: false });

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    // const billboard = await getBillboard("c7330112-a334-4671-bfbc-84d36060b664");
    return (
        <Container>
            <div className="space-y-10 pb-10">
            {/* <ImageSlider />  */}
                {/* <Billboard data={billboard} /> */}
            
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Produits populaires" items={products} />
                </div>
            </div>
        </Container>
    );
}

export default HomePage;