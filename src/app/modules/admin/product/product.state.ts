import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { ProductList, IProduct } from "src/app/_model/product-list.model";


export const productFutureName = "product";



export interface ProductState extends EntityState<IProduct> { }


export const productAdapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>()



export const initialProductState: ProductState = productAdapter.getInitialState();


const initialProductStateX = [
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



