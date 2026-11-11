import { createClient } from 'microcms-js-sdk';

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;
if (!serviceDomain || !apiKey) {
  throw new Error('microCMSの設定がありません。.env の2項目を確認してください。');
}
export const cms = createClient({ serviceDomain, apiKey });
export type News = { id: string; title: string; content: string; publishedAt?: string; thumbnail?: {url:string}; category?: string | string[] };
export type Staff = { id: string; name: string; position?: string; profile?: string; photo?: {url:string} };
