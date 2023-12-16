export class Category {
    constructor(
        public mainCat?: String,
        public subCat?: String,
        public childCat_1?: String,
        public childCat_2?: String,
        public product?: [],
    ) { }
}


export interface ICategory {
    mainCat?: String,
    subCat?: String,
    childCat_1?: String,
    childCat_2?: String,
    product?: [],
}