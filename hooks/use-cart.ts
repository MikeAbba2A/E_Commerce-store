import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
};

const useCart = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (data: Product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === data.id);

                if (existingItem) {
                    return toast("Ce produit existe déjà dans votre panier.");
                }

                set({ items: [...currentItems, data] });
                toast.success("Produit ajouté à votre panier.");
            },
            removeItem: (id: string) => {
                set({ items: get().items.filter((item) => item.id !== id) });
                toast.success("Ce produit a été retiré de votre panier.");
            },
            removeAll: () => set({ items: [] }),
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useCart;