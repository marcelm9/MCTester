import { questions_hard } from '$lib/questions';
import { json } from '@sveltejs/kit';

function shuffle() {
	const shuffled_questions = questions_hard.toSorted(() => Math.random() - 0.5);
	shuffled_questions.forEach((q) => {
		q.answers = q.answers.toSorted(() => Math.random() - 0.5);
	});
	return shuffled_questions;
}

export function GET() {
	return json(shuffle(), {
		status: 200
	});
}
