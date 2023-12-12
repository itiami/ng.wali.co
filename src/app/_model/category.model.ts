export class Category {
    constructor(
        public mainCat?: String,
        public subCat?: String,
        public childCat?: String,
        public product?: [],
    ) { }
}


export interface ICategory {
    mainCat?: String,
    subCat?: String,
    childCat?: String,
    product?: [],
}