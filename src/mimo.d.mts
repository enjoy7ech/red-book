export const CHAT_LIMIT: number;
export function chatPayload(data: any, model: string): any;
export function speechPayload(data: any, model: string): any;
export function recognitionPayload(data: any, model: string): any;
export function callMiMo(operation: string, data: any, config: Record<string, string>, signal?: AbortSignal, fetcher?: typeof fetch): Promise<Response>;
