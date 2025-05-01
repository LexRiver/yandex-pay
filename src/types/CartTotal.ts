export interface CartTotal {
    /**
     * Cart cost with all discounts
     * @example "123.45"
     */
    amount: string;

    /**
     * Name of measurement units, for example, "kg" or "pcs"
     * Max length: 2048
     */
    label?: string;

    /**
     * Number of Plus points
     * Read-only field. Input values will be ignored.
     * @example "123.45"
     */
    pointsAmount?: string;
}

    
