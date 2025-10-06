import React, { useState, useEffect } from "react";
import filmsData from "./films.json";
import { films } from './list.ts';


type Film = {
	id: number;
	name: string;
	duree: number;
};

const SearchBar: React.FC = () => {
	const [search, setSearch] = useState("");
	const [films2, setFilms] = useState<Film[]>([]);

	useEffect(() => {
		setFilms(films as Film[]);
	}, []);

	const filteredFilms = films2.filter(film =>
		film.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div style={{ width: "80%", maxHeight: "700px", overflowY: "auto", margin: "auto" }}>
			<h2>Recherche de films</h2>
			<input
				type="text"
				placeholder="Rechercher un film..."
				value={search}
				onChange={e => setSearch(e.target.value)}
				style={{ width: "90%", marginBottom: 16 }}
			/>
			<ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", alignItems: "stretch" }}>
				{filteredFilms.map(film => (
					<li key={film.id} style={{ marginBottom: 8, borderBottom: "1px solid #eee", paddingBottom: 8 }}>
						<strong>{film.name}</strong> <span style={{ color: "#888" }}>({film.duree} min)</span>
					</li>
				))}
				{filteredFilms.length === 0 && <li>Aucun film trouvé.</li>}
			</ul>
		</div>
	);
};

export default SearchBar;
