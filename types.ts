export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
};

export interface Category {
    id: string;
    name: string;
    billboardId: string;
    sizes: Size[]; // Ajoutez cette ligne
    billboard: Billboard; // Ajoutez cette ligne
    createdAt: string;
    updatedAt: string;
  }

export interface Product {
    id: string;
    category: Category;
    name: string;
    description: string;
    price: string;
    isFeatured: boolean;
    color: { id: string; name: string; value: string };
    size: { id: string; name: string; value: string };
    images: Image[];
};

export interface Image {
    id: string;
    url: string;
};

export interface Size {
    id: string;
    name: string;
    value: string;
  }

export interface Color {
    id: string;
    name: string;
    value: string;
};


