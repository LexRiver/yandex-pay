import { CartItem } from "./CartItem.js";

export type CartItemWithoutFinalPriceCamelCase = Omit<CartItem, 'finalPrice'>

