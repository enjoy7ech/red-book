import { callMiMo } from './mimo.mjs';
import config from './mimo-config.json';

export const mimoConfigured = !!config.MIMO_API_KEY;
export function mimoRequest(path: string, init: RequestInit): Promise<Response> {
 const operation = path.split('/').pop()!;
 return callMiMo(operation, JSON.parse(String(init.body)), config, init.signal ?? undefined);
}
