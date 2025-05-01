export interface TargetCartItem {
    /**
     * Cart item ID as of order creation. If you pass an ID that was not present in the initial cart, an error occurs.
     * Max length: 2048
     */
    productId: string;

    /**
     * Price per product/service unit after the operation is completed.
     * Specify if the unit price gets lower as a result of the operation.
     * This may be helpful if part of the money paid for the product needs to be refunded or when confirming the order.
     * If the field is not specified in the request, the price is considered unchanged.
     * Example: 123.45
     */
    price?: string;

    /**
     * The number of product/service units the user gets after the operation is completed.
     * If the field is not specified in the request, the number is considered unchanged.
     * Example: 123.45
     */
    quantityCount?: string;
}
