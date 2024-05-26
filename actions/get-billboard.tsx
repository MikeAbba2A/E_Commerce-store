import { Billboard } from "@/types";

const getBillboard = async (id: string): Promise<Billboard> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards/${id}`;

    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Une erreur est survenue lors de la récupération des billboards');
    }

    const data = await res.json();
    return data;
};

export default getBillboard;