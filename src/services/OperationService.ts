import { Operation } from '../types/Operation.js';
import { BaseService } from './BaseService.js';

/**
 * Service for working with operations
 */
export class OperationService extends BaseService {
    /**
     * Gets operations for an order
     * 
     * @param orderId Order ID
     * @returns List of operations
     */
    async getOperations(orderId: string): Promise<Operation[]> {
        const response = await this.get<{ operations: Operation[] }>('/v1/operations', { 
            orderId 
        });
        
        return response.operations;
    }
} 