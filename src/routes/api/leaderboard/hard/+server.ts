import type { LeaderboardEntry } from '$lib/types';
import { json } from '@sveltejs/kit';
import * as fs from 'node:fs';

export async function GET() {
	let data;
	try {
		data = await fs.promises.readFile('./leaderboard_hard.json', 'utf8');
	} catch {
		data = '[]';
	}

	const leaderboard: LeaderboardEntry[] = JSON.parse(data);

	return json(
		leaderboard.toSorted((a, b) => a.time - b.time).toSorted((a, b) => b.points - a.points)
	);
}
