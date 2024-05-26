import { Color } from "@/types";

const getColors = async (): Promise<Color[]> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
 
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {

        throw new Error('Une erreur est survenue lors de la récupération des categories');
    }

    const data = await res.json();
    return data;
};

export default getColors;