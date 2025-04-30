/**
 * Standard API response structure from Yandex Pay API
 */
export interface ApiResponse<T> {
    /**
     * HTTP status code
     */
    code: number;
    
    /**
     * Response status
     */
    status: 'success';
    
    /**
     * Response data
     */
    data: T;
} 