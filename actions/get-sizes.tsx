import { Size } from "@/types";

const getSizes = async (): Promise<Size[]> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;
 
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

export default getSizes;