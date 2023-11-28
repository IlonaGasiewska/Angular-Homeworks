export enum productType {
    fruit = "fruit",
    sweets = "sweets",
    alcohol = "alcohol",
    other = "other"
}

export const products = [
    {
        type: productType.fruit,
        name: 'Apples',
        qty: 5
    },
    {
        type: productType.fruit,
        name: 'Bananas',
        qty: 2
    },
    {
        type: productType.sweets,
        name: 'Candies',
        qty: 1
    },
    {
        type: productType.sweets,
        name: 'Gingerbead',
        qty: 10
    },
    {
        type: productType.alcohol,
        name: 'Tequila',
        qty: 9
    },
    {
        type: productType.other,
        name: 'Weed',
        qty: 9
    },
    {
        type: productType.other,
        name: 'Candles',
        qty: 9
    },
]
