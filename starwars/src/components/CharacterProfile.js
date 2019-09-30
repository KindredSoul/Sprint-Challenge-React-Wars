import React from "react";

const CharacterProfiles = props => {
	return (
		<div>
			<h3>{props.name}</h3>
			<ul>
				<li>Date of Birth: {props.birthYear}</li>
				<li>Eye Color: {props.eyeColor} </li>
				<li>Films: {props.films} </li>
				<li>Gender: {props.gender} </li>
				<li>Hair Color: {props.hairColor} </li>
				<li>Height: {props.height} </li>
				<li>Homeworld: {props.homeworld} </li>
				<li>Mass: {props.mass} </li>
				<li>Skin Color: {props.skinColor} </li>
				<li>Species: {props.species}</li>
				<li>Starships: {props.starships}</li>
				<li>Vehicles: {props.vehicles}</li>
			</ul>
		</div>
	);
};

export default CharacterProfiles;
