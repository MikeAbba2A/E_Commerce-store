import { Product } from "@/types";

const getProduct = async (id: string): Promise<Product> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;

    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Une erreur est survenue lors de la récupération du produit');
    }

    const data = await res.json();
    return data;
};

export default getProduct;