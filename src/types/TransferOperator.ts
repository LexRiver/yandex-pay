/**
 * TransferOperator
 * @property {string} address - Max length: 2048
 * @property {string} inn - Max length: 2048
 * @property {string} name - Max length: 2048
 * @property {string[]} phones - Each string max length: 2048
 */
export interface TransferOperator {
    /**
     * Max length: 2048
     */
    address?: string;
    /**
     * Max length: 2048
     */
    inn?: string;
    /**
     * Max length: 2048
     */
    name?: string;
    /**
     * Each string max length: 2048
     */
    phones?: string[];
}
