export interface BillingReport {
    /**
     * Type: string
     * The field is required for offline stores only. ID of the point of sale
     * Default: null
     * Max length: 2048
     */
    branchId?: string | null;

    /**
     * Type: string
     * The field is required for offline stores only. Manager ID
     * Default: null
     * Max length: 2048
     */
    managerId?: string | null;
}
