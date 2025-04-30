import { EnumOperationStatus } from '../enums/OperationStatus.js';
import { EnumOperationType } from '../enums/OperationType.js';

/**
 * Operation data returned by the API
 */
export interface Operation {
    /**
     * Operation ID
     */
    operationId: string;
    
    /**
     * Operation type
     */
    operationType: EnumOperationType;
    
    /**
     * Order ID
     */
    orderId: string;
    
    /**
     * Operation amount in fiat currency
     */
    amount: string;
    
    /**
     * Date and time of operation creation (ISO 8601)
     */
    created?: string;
    
    /**
     * External operation ID on the merchant side
     */
    externalOperationId?: string;
    
    /**
     * Additional parameters
     */
    params?: Record<string, unknown>;
    
    /**
     * Operation amount in Plus points
     */
    pointsAmount?: string;
    
    /**
     * Error reason
     */
    reason?: string;
    
    /**
     * Operation status
     */
    status?: EnumOperationStatus;
    
    /**
     * Date and time of operation update (ISO 8601)
     */
    updated?: string;
}

/**
 * Operation response data
 */
export interface OperationResponseData {
    operation: Operation;
} 