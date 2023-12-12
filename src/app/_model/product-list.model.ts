export interface IProduct {
    id: number;
    title?: string;
    weight?: string;
    quality?: string;
    detail?: string;
    price?: number;
    imageUrl?: string;
    category?: string;
}

export class ProductList implements IProduct {
    id: number;
    title?: string;
    weight?: string;
    quality?: string;
    detail?: string;
    price?: number;
    imageUrl?: string;
    category?: string;

    constructor(productData: IProduct) {
        this.id = productData.id;
        this.title = productData.title;
        this.weight = productData.weight;
        this.quality = productData.quality;
        this.detail = productData.detail;
        this.price = productData.price;
        this.imageUrl = productData.imageUrl;
        this.category = productData.category;
    }

    // Getters for each property
    get getId() {
        return this.id;
    }

    get getTitle() {
        return this.title;
    }

    // ... (similar getters for other properties)
}
