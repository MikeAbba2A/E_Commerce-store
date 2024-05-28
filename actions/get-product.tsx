import { Product } from "@/types";

const getProduct = async (id: string): Promise<Product> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;

    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store' // Désactiver le cache
        },
    });

    if (!res.ok) {
        throw new Error('Une erreur est survenue lors de la récupération du produit');
    }

    const data = await res.json();
    console.log('Product data:', data); // Ajoutez ce log pour vérifier les données récupérées
    return data;
};

export default getProduct;