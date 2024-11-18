export type PineconeIconPropsType={
    fill?:'white' | 'black'
}
export type CheckCategoryType={
    id:number,
    title:string,
    description:string,
    iconName:string
}
export type Food={
    id:number,
    foodName:string,
    categoryId:number,
    categoryName:string,
    initialPrice:number,
    discountPercent:number,
    currency:string
}