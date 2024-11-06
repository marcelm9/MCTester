// HARD //

import { ban_ip, is_banned } from '$lib/helper.js';
import type { LeaderboardEntry } from '$lib/types';
import { json } from '@sveltejs/kit';
import * as fs from 'node:fs';

/* eslint-disable */
function check(data: any): string {
	if (
		data === undefined ||
		data.name === undefined ||
		data.points === undefined ||
		data.time === undefined
	) {
		return 'missing properties';
	}

	if (isNaN(parseInt(data.points))) {
		return "'points' must be a number";
	}

	if (isNaN(parseFloat(data.time))) {
		return "'time' must be a float";
	}

	if (data.name.trim() === '') {
		return "'name' must not be empty";
	}

	if (data.name.length > 25) {
		return "'name' must not be longer than 25 characters";
	}

	return '';
}

export async function POST({ request, locals }) {
	let data_recv;
	try {
		data_recv = await request.json();
	} catch {
		return json({ message: 'data missing' }, { status: 400 });
	}

	let error;
	if ((error = check(data_recv)) !== '') {
		return json({ message: error }, { status: 400 });
	}

	let data_read;
	try {
		data_read = await fs.promises.readFile('./leaderboard_hard.json', 'utf8');
	} catch {
		data_read = '[]';
	}

	if (data_recv.points < 0 || data_recv.points > 15 || (data_recv.time * 0.75 < data_recv.points)) {
		ban_ip(locals.ip);
		console.log(`(hard) Banned ip ${locals.ip} ( ${data_recv.name} | ${data_recv.points} | ${data_recv.time} )`);
		return json(null, { status: 200 }); // intentionally misleading
	}

	const leaderboard: LeaderboardEntry[] = JSON.parse(data_read);
	leaderboard.push({ name: data_recv.name, points: data_recv.points, time: data_recv.time });

	const new_data = leaderboard
		.toSorted((a, b) => a.time - b.time)
		.toSorted((a, b) => b.points - a.points);

	await fs.promises.writeFile('./leaderboard_hard.json', JSON.stringify(new_data.slice(0, 25)));

	if (new_data.slice(0, 25).find((x) => x.name === data_recv.name)) {
		console.log(`(hard) New leaderboard entry from ${locals.ip}: ( ${data_recv.name} | ${data_recv.points} | ${data_recv.time} )`);
	}
	return json(null, { status: 200 });
}
