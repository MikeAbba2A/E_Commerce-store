import { Category } from "@/types";

const getCategory = async (id: string): Promise<Category> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`;

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

export default getCategory;