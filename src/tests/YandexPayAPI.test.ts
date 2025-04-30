import { beforeEach, describe, expect, it, vi } from 'vitest';
import { YandexPayAPI } from '../YandexPayAPI.js';

// Mock the fetch function
global.fetch = vi.fn();

describe('YandexPayAPI', () => {
    let api: YandexPayAPI;
    
    beforeEach(() => {
        // Reset mocks before each test
        vi.resetAllMocks();
        
        // Create a new API instance with a test API key
        api = new YandexPayAPI({
            apiKey: 'test-api-key',
            sandbox: true
        });
        
        // Mock successful response
        (global.fetch as any).mockResolvedValue({
            ok: true,
            json: async () => ({
                code: 200,
                status: 'success',
                data: {}
            })
        });
    });
    
    describe('OrderService', () => {
        it('should create an order', async () => {
            // Mock response with order data
            (global.fetch as any).mockResolvedValueOnce({
                ok: true,
                json: async () => ({
                    code: 200,
                    status: 'success',
                    data: {
                        orderId: 'test-order-id',
                        paymentUrl: 'https://sandbox.pay.yandex.ru/payment',
                        status: 'CREATED'
                    }
                })
            });
            
            const result = await api.orders.createOrder({
                cart: {
                    items: [{
                        productId: 'test-product',
                        title: 'Test Product',
                        quantity: { count: '1' },
                        total: '100.00'
                    }],
                    total: { amount: '100.00' }
                },
                orderId: 'test-order-id',
                currencyCode: 'RUB',
                redirectUrls: {
                    onSuccess: 'https://example.com/success',
                    onError: 'https://example.com/error'
                }
            });
            
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(global.fetch).toHaveBeenCalledWith(
                'https://sandbox.pay.yandex.ru/api/merchant/v1/orders',
                expect.objectContaining({
                    method: 'POST',
                    headers: expect.objectContaining({
                        'Authorization': 'Api-Key test-api-key'
                    })
                })
            );
            
            expect(result).toEqual({
                orderId: 'test-order-id',
                paymentUrl: 'https://sandbox.pay.yandex.ru/payment',
                status: 'CREATED'
            });
        });
        
        it('should get order details', async () => {
            // Mock response with order data
            (global.fetch as any).mockResolvedValueOnce({
                ok: true,
                json: async () => ({
                    code: 200,
                    status: 'success',
                    data: {
                        order: {
                            orderId: 'test-order-id',
                            status: 'PAID'
                        }
                    }
                })
            });
            
            const result = await api.orders.getOrder('test-order-id');
            
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(global.fetch).toHaveBeenCalledWith(
                'https://sandbox.pay.yandex.ru/api/merchant/v1/orders/test-order-id',
                expect.objectContaining({
                    method: 'GET',
                    headers: expect.objectContaining({
                        'Authorization': 'Api-Key test-api-key'
                    })
                })
            );
            
            expect(result).toEqual({
                orderId: 'test-order-id',
                status: 'PAID'
            });
        });
    });
    
    describe('Error handling', () => {
        it('should throw an error for failed requests', async () => {
            // Mock error response
            (global.fetch as any).mockResolvedValueOnce({
                ok: false,
                json: async () => ({
                    code: 400,
                    status: 'error',
                    data: {
                        message: 'Invalid request'
                    }
                })
            });
            
            await expect(api.orders.getOrder('test-order-id')).rejects.toThrow('API Error');
        });
    });
}); 