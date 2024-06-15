type CustomFormType = {
    id: number | undefined
    itemName: string
    weightPrice: Array<WeightPriceType>
}

export type WeightPriceType = {
    id: number | undefined
    weight: number
    price: number 
    weightUnit: string
}

export default CustomFormType