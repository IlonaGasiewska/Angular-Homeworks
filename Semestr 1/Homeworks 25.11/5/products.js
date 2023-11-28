"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.productType = void 0;
var productType;
(function (productType) {
    productType["fruit"] = "fruit";
    productType["sweets"] = "sweets";
    productType["alcohol"] = "alcohol";
    productType["other"] = "other";
})(productType || (exports.productType = productType = {}));
exports.products = [
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
    }
];
//# sourceMappingURL=products.js.map