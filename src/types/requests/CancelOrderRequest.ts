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