export interface ItemQuantity {
    /**
     * Product quantity in the order
     * @example "123.45"
     */
    count: string;

    /**
     * Maximum available product quantity
     * @example "123.45"
     */
    available?: string;

    /**
     * Name of measurement units, for example, "kg" or "pcs"
     * Max length: 2048
     */
    label?: string;
}
