export interface MerchantRedirectUrls {
    /**
     * The field is required for online stores only. A link to redirect the user in case of a payment error or TTL expiry for a payment link
     * Max length: 2048
     */
    onError: string;

    /**
     * The field is required for online stores only. Link to redirect the user on payment success.
     * Max length: 2048
     */
    onSuccess: string;

    /**
     * Link to redirect the user on payment cancellation. Payment can be canceled by the user in the payment form.
     * Max length: 2048
     */
    onAbort?: string;
}
