export interface Discount {
    /**
     * Discount amount
     * @example "123.45"
     */
    amount: string;

    /**
     * Text description
     * Max length: 2048
     */
    description: string;

    /**
     * Discount ID in the merchant system
     * Max length: 2048
     */
    discountId: string;
}
