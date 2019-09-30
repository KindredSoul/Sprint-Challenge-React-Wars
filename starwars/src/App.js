import React, { useState, useEffect } from "react";
import CharacterProfiles from "./components/CharacterProfile";
import axios from "axios";
import "./App.css";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [starwarsChars, setStarwarsChars] = useState([]);

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	useEffect(() => {
		axios
			.get("https://swapi.co/api/people")
			.then(results => {
				let swData = results.data.results;
				console.log(swData);
				setStarwarsChars(swData);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
			{starwarsChars.map((data, i) => {
				return (
					<CharacterProfiles
						key={i}
						name={data.name}
						birthYear={data.birth_year}
						eyeColor={data.eye_color}
						films={data.films}
						gender={data.gender}
						hairColor={data.hair_color}
						height={data.height}
						homeworld={data.homeworld}
						mass={data.mass}
						skinColor={data.skin_color}
						species={data.species}
						starships={data.starships}
						vehicles={data.vehicles}
					/>
				);
			})}
		</div>
	);
};

export default App;
