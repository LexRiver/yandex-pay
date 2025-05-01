import { EnumFnsMeasure } from "../enums/EnumFnsMeasure.js";
import { EnumFnsPaymentMethodType } from "../enums/EnumFnsPaymentMethodType.js";
import { EnumFnsPaymentSubjectType } from "../enums/EnumFnsPaymentSubjestType.js";
import { EnumFnsTax } from "../enums/EnumFnsTax.js";
import { Agent } from "./Agent.js";
import { MarkQuantity } from "./MarkQuantity.js";
import { Supplier } from "./Supplier.js";

export interface ItemReceipt{

    tax: EnumFnsTax;
    agent?: Agent
    
    /**
     * Type: string<double>
     * It shouldn't include more than two decimal digits. For example: 1.12, 5.1, 10, 11.00 .
     * Example: 123.45
     */
    excise?: string;
    markQuantity?: MarkQuantity;

    measure?: EnumFnsMeasure;
    paymentMethodType?: EnumFnsPaymentMethodType;
    paymentSubjectType?: EnumFnsPaymentSubjectType;
    /**
     * Type: string<base64>
     * Product code (a base64-encoded array of 1 to 32 bytes)
     */
    productCode?:string

    supplier?: Supplier;
    /**
     * Type: string
     * Max length: 2048
     */
    title?:string;


    
}