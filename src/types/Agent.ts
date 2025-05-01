import { EnumFnsAgentType } from "../enums/EnumFnsAgentType.js";
import { PaymentsOperator } from "./PaymentsOperator.js";
import { TransferOperator } from "./TransferOperator.js";

export interface Agent {
    /**
     * Agent type by taxable object. See values
     * Enum: 1, 2, 3, 4, 5, 6, 7
     */
    agentType: EnumFnsAgentType;
    
    /**
     * Max length: 2048
     */
    operation: string;
    
    paymentsOperator: PaymentsOperator;
    
    phones: string[];
    
    transferOperator: TransferOperator;
}
