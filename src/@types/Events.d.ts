import { CUSTOM_EVENTS } from '../constants';
export type GlobalEvent = keyof typeof CUSTOM_EVENTS;

export type GlobalEventConfig = { name: string };
