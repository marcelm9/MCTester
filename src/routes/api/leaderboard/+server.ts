import type { LeaderboardEntry } from '$lib/types';
import { json } from '@sveltejs/kit';
import * as fs from 'fs';

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
	const data = await fs.promises.readFile('./leaderboard.json', 'utf8');
	let leaderboard: LeaderboardEntry[] = JSON.parse(data);

	return json(
		leaderboard.toSorted((a, b) => a.time - b.time).toSorted((a, b) => b.points - a.points)
	);
}

export async function POST({ request }) {
	let data;
	try {
		data = await request.json();
	} catch {
		return json({ message: 'data missing' }, { status: 400 });
	}

	let error;
	if ((error = check(data)) !== '') {
		return json({ message: error }, { status: 400 });
	}

	const oldData = JSON.parse(await fs.promises.readFile('./leaderboard.json', 'utf8'));
	const newData = [...oldData, data];
	await fs.promises.writeFile('./leaderboard.json', JSON.stringify(newData));

	return json(null, { status: 200 });
}
