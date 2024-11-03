export type Question = {
	id: number;
	question: string;
	answers: [boolean, string][];
};

export type LeaderboardEntry = {
	id: number;
	name: string;
	points: number;
	time: number;
	rank?: number;
};
