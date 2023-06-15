import { writable, type Writable } from "svelte/store";

export const nickname: Writable<string> = writable("");
export const chatMode: Writable<boolean> = writable(false);
export const roomCreator: Writable<string> = writable("");
export const roomID: Writable<string> = writable("");