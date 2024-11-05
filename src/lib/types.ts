export type Question = {
	id: number;
	question: string;
	answers: [boolean, string][];
	info?: string;
};

export type LeaderboardEntry = {
	name: string;
	points: number;
	time: number;
	rank?: number;
};
