import { ProductList } from "../../_model/product-list.model";

export interface IProduct {
    title: String;
    weight: String;
    quality: String;
    detail: String;
    price: number;
    imageUrl: String;
    category: String;
}

export interface ProductState {
    products: IProduct[];
    error: string
}



/* export const initialProductState: ProductState = {
    product: [],
}; */


export const productInitialState = [
    {
        "_id": "655f6e83adca3b88d0af2cae",
        "title": "Broccoli",
        "detail": "1pice",
        "price": "1.49",
        "imageUrl": "https://www.cora.fr/media/produit/1700264494/460/R23/zbwrezILQBzbzbwrwrwrwrwrwrOqQB.webp",
        "quantity": 42,
        "__v": 0,
        "categoryId": "6551d9212e083ac74cea5e61"
    },
    {
        "_id": "655f6ecbadca3b88d0af2cb6",
        "title": "Tomate ronde grappe",
        "detail": "1pice",
        "price": "2.49",
        "imageUrl": "https://www.cora.fr/media/produit/1700264494/460/R23/zbwrezILwrQBIWwrwrwrwrwrwrOqQB.webp",
        "quantity": 42,
        "__v": 0,
        "categoryId": "6551d9212e083ac74cea5e61"
    }

]