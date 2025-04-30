export interface CartItem {
    /**
     * Product ID in the merchant system
     */
    productId: string;
    
    /**
     * Product quantity in the order
     */
    quantity: {
        /**
         * Product quantity in the order
         */
        count: string;
        
        /**
         * Maximum available product quantity
         */
        available?: string;
        
        /**
         * Name of measurement units, e.g., "kg" or "pcs"
         */
        label?: string;
    };
    
    /**
     * Product name
     */
    title: string;
    
    /**
     * Total price per item with item discount
     */
    total: string;
    
    /**
     * Product description
     */
    description?: string;
    
    /**
     * Price per product unit with discount per item
     */
    discountedUnitPrice?: string;
    
    /**
     * Product dimensions and weight (required for PHYSICAL product)
     */
    measurements?: {
        /**
         * Height, in meters
         */
        height: number;
        
        /**
         * Length, in meters
         */
        length: number;
        
        /**
         * Weight, in kilograms
         */
        weight: number;
        
        /**
         * Width, in meters
         */
        width: number;
    };
    
    /**
     * Total price per item without discount
     */
    subtotal?: string;
    
    /**
     * Product type
     */
    type?: 'PHYSICAL' | 'DIGITAL' | 'UNSPECIFIED';
    
    /**
     * Price per product unit without discount
     */
    unitPrice?: string;
}

export interface Cart {
    /**
     * Items in the cart
     */
    items: CartItem[];
    
    /**
     * Total cart cost
     */
    total: {
        /**
         * Cart cost with all discounts
         */
        amount: string;
        
        /**
         * Name of measurement units, e.g., "kg" or "pcs"
         */
        label?: string;
    };
    
    /**
     * Internal ID of the Yandex Pay cart
     */
    cartId?: string;
    
    /**
     * Coupons applied to the cart
     */
    coupons?: {
        /**
         * Coupon code
         */
        value: string;
        
        /**
         * Description, e.g., "3% discount"
         */
        description?: string;
        
        /**
         * Coupon status
         */
        status?: 'VALID' | 'INVALID' | 'EXPIRED' | null;
    }[];
    
    /**
     * Discounts applied to the cart
     */
    discounts?: {
        /**
         * Discount amount
         */
        amount: string;
        
        /**
         * Text description
         */
        description: string;
        
        /**
         * Discount ID in the merchant system
         */
        discountId: string;
    }[];
    
    /**
     * Cart ID passed by the merchant
     */
    externalId?: string;
}

export interface CreateOrderRequest {
    /**
     * Cart contents
     */
    cart: Cart;
    
    /**
     * Order ID on the merchant side (must be unique)
     */
    orderId: string;
    
    /**
     * Three-letter code of the order currency (ISO 4217)
     */
    currencyCode: string;
    
    /**
     * URLs to redirect the user after payment
     */
    redirectUrls: {
        /**
         * URL to redirect on successful payment
         */
        onSuccess: string;
        
        /**
         * URL to redirect on payment error
         */
        onError: string;
    };
    
    /**
     * Available payment methods
     */
    availablePaymentMethods?: string[];
    
    /**
     * Time to live for the order in seconds
     */
    ttl?: number;
}

export interface CreateOrderResponse {
    /**
     * Order ID in Yandex Pay
     */
    orderId: string;
    
    /**
     * URL to the payment form to redirect the user
     */
    paymentUrl: string;
    
    /**
     * Order status
     */
    status: string;
}

export interface GetOrderResponse {
    /**
     * Order ID on the merchant side
     */
    orderId: string;
    
    /**
     * Order status
     */
    status: string;
    
    /**
     * URL to the payment form
     */
    paymentUrl?: string;
    
    /**
     * Cart information
     */
    cart?: Cart;
}

export interface CancelOrderRequest {
    /**
     * Cancellation reason
     */
    reason: string;
    
    /**
     * Operation ID
     */
    externalOperationId?: string;
}

export interface RefundOrderRequest {
    /**
     * Refund amount
     */
    amount: string;
    
    /**
     * External operation ID
     */
    externalOperationId?: string;
}

export interface CaptureOrderRequest {
    /**
     * Final cart
     */
    cart: Cart;
    
    /**
     * External operation ID
     */
    externalOperationId?: string;
    
    /**
     * Amount to capture
     */
    orderAmount?: string;
}

export interface OrderResponseData {
    order: GetOrderResponse;
} 