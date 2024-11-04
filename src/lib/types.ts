export type Question = {
	id: number;
	question: string;
	answers: [boolean, string][];
};

export type LeaderboardEntry = {
	name: string;
	points: number;
	time: number;
	rank?: number;
};
