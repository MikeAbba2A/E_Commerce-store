import { Category } from "@/types";

const getCategory = async (id: string): Promise<Category> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`;

    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Une erreur est survenue lors de la récupération de la catégorie');
    }

    const data = await res.json();
    console.log('Fetched category data:', data); // Ajoutez ceci pour déboguer
    return data;
};

export default getCategory;