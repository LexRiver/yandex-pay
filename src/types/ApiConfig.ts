/**
 * Configuration for the YandexPayAPI client
 */
export interface ApiConfig {
    /**
     * API key for authentication
     */
    apiKey: string;
    
    /**
     * Use sandbox environment
     * @default false
     */
    sandbox?: boolean;
} 