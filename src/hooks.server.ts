import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.ip = event.getClientAddress();
    return resolve(event);
};
