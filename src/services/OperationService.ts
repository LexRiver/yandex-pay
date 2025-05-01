import { OrderResponseOperation } from '../types/responses/OrderResponseOperation.js';
import { BaseService } from './BaseService.js';

/**
 * Service for working with operations
 */
export class OperationService extends BaseService {
    /**
     * Request to get details about the payment authorization, debiting, refund, or cancellation operations.
     * 
     * @param externalOperationId External operation ID
     * @returns Operation details
     */
    async getOperation(externalOperationId: string): Promise<OrderResponseOperation[]> {
        const response = await this.get<{ operations: OrderResponseOperation[] }>(`/v1/operations/${externalOperationId}`);
        
        return response.operations;
    }
} 