export interface CreateOrderResponse {
    /**
     * Order ID in Yandex Pay
     */
    // orderId: string;
    
    /**
     * URL to the payment form to redirect the user
     */
    paymentUrl: string;
    
    /**
     * Order status
     */
    // status: string;
}
