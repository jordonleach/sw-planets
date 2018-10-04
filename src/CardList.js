import React from 'react';
import Card from './Card';

const CardList = ({ planets }) => {
	return (
		<div className="tc">
			{planets.map((name, i) => {
				return (
					<Card 
						key={i} 
						name={planets[i].name}
					/>
				);
			})
			}
		</div>
	);
}

export default CardList;