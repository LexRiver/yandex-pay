import { ApiResponse } from '../types/ApiResponse.js';

/**
 * Base service class for making API requests
 */
export abstract class BaseService {
    /**
     * Base URL for API requests
     */
    protected readonly baseUrl: string;
    
    /**
     * API key for authentication
     */
    protected readonly apiKey: string;
    
    /**
     * Creates a new BaseService instance
     * 
     * @param baseUrl Base URL for API requests
     * @param apiKey API key for authentication
     */
    constructor(baseUrl: string, apiKey: string) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }
    
    /**
     * Makes a GET request to the API
     * 
     * @param path API path
     * @param params Query parameters
     * @returns Response data
     */
    protected async get<T>(path: string, params?: Record<string, string>): Promise<T> {
        const url = new URL(`${this.baseUrl}${path}`);
        
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, value);
            });
        }
        
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: this.getHeaders(),
        });
        
        return this.handleResponse<T>(response);
    }
    
    /**
     * Makes a POST request to the API
     * 
     * @param path API path
     * @param data Request body
     * @returns Response data
     */
    protected async post<T>(path: string, data: Record<string, any>): Promise<T> {
        const url = new URL(`${this.baseUrl}${path}`);
        
        const response = await fetch(url.toString(), {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(data),
        });
        
        return this.handleResponse<T>(response);
    }
    
    /**
     * Gets the headers for API requests
     */
    protected getHeaders(): Record<string, string> {
        const requestId = this.generateRequestId();
        
        return {
            'Content-Type': 'application/json',
            'Authorization': `Api-Key ${this.apiKey}`,
            'X-Request-Id': requestId,
            'X-Request-Timeout': '20000',
            'X-Request-Attempt': '0',
        };
    }
    
    /**
     * Generates a request ID
     */
    protected generateRequestId(): string {
        return `req-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
    }
    
    /**
     * Handles the API response
     * 
     * @param response Fetch Response
     * @returns Response data
     */
    protected async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API Error: ${response.status} - ${JSON.stringify(errorData)}`);
        }
        
        const data = await response.json() as ApiResponse<T>;
        return data.data;
    }
} 