type CustomFormType = {
    itemName: string
    weightPrice: Array<WeightPriceType>
}

export type WeightPriceType = {
    weight: number
    price: number
}

export default CustomFormType