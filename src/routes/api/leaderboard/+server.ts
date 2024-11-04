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

	return '';
}

export async function GET() {
	let data;
	try {
		data = await fs.promises.readFile('./leaderboard.json', 'utf8');
	} catch {
		data = '[]';
	}

	let leaderboard: LeaderboardEntry[] = JSON.parse(data);

	return json(
		leaderboard.toSorted((a, b) => a.time - b.time).toSorted((a, b) => b.points - a.points)
	);
}

export async function POST({ request }) {
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
		data_read = await fs.promises.readFile('./leaderboard.json', 'utf8');
	} catch {
		data_read = '[]';
	}

	const leaderboard: LeaderboardEntry[] = JSON.parse(data_read);
	leaderboard.push({ name: data_recv.name, points: data_recv.points, time: data_recv.time });

	const new_data = leaderboard
		.toSorted((a, b) => a.time - b.time)
		.toSorted((a, b) => b.points - a.points);

	await fs.promises.writeFile('./leaderboard.json', JSON.stringify(new_data.slice(0, 25)));

	return json(null, { status: 200 });
}
