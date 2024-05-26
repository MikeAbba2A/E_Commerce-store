import { Product } from "@/types";
import qs from "query-string";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const URL = qs.stringifyUrl({
        url: url,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    });
 
    const res = await fetch(URL, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {

        throw new Error('Une erreur est survenue lors de la récupération des produits');
    }

    const data = await res.json();
    return data;
};

export default getProducts;