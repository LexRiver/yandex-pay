import { EnumShippingMethodType } from "../enums/EnumShippingMethodType.js"

export interface ShippingPrice{
    /**
     * Type: string<double>
     * It shouldn't include more than two decimal digits. For example: 1.12, 5.1, 10, 11.00 .
     * Example: 123.45
     */
    amount:string
    methodType: EnumShippingMethodType
}