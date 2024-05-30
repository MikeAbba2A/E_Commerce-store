import { Category } from "@/types";

const getCategories = async (): Promise<Category[]> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
 
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store', // Désactiver le cache
        },
    });

    if (!res.ok) {

        throw new Error('Une erreur est survenue lors de la récupération des categories');
    }

    const data = await res.json();
    return data;
};

export default getCategories;