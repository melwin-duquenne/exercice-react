export const films = Array.from({ length: 2000 }, (_, i) => ({
	id: i + 1,
	name: `Film ${i + 1}`,
	duree: Math.floor(Math.random() * 101) + 80 
}));
