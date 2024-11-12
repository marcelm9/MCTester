import { is_banned } from '$lib/helper';
import { json, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const ip = event.getClientAddress();
	if (is_banned(ip)) {
		return json(null, { status: 200 }); // intentionally misleading
	}
	event.locals.ip = ip;
	return resolve(event);
};
