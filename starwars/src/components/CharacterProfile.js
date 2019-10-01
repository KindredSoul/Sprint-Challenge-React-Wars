import React from "react";
import styled from "styled-components";

const CharacterProfile = styled.div`
	width: 100%;
	border: 2px solid grey;
	background: rgba(30, 30, 167, 0.4);
`;

const CharacterProfiles = props => {
	return (
		<CharacterProfile>
			<h3>{props.name}</h3>
			<ul>
				<li>Date of Birth: {props.birthYear}</li>
				<li>Eye Color: {props.eyeColor} </li>
				<li>Gender: {props.gender} </li>
				<li>Hair Color: {props.hairColor} </li>
				<li>Height: {props.height} </li>
				<li>Homeworld: {props.homeworld} </li>
				<li>Mass: {props.mass} </li>
				<li>Skin Color: {props.skinColor} </li>
				<li>Species: {props.species}</li>
				<li>
					Films:
					<ol>
						{props.films.map((film, i) => {
							return <li key={i}>{film}</li>;
						})}
					</ol>
				</li>
				<li>
					Starships:
					<ol>
						{props.starships.map((starship, i) => {
							return <li key={i}>{starship}</li>;
						})}
					</ol>
				</li>
				<li>
					Vehicles:
					<ol>
						{props.vehicles.map((vehicle, i) => {
							return <li key={i}>{vehicle}</li>;
						})}
					</ol>
				</li>
			</ul>
		</CharacterProfile>
	);
};

export default CharacterProfiles;
