import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--washed-green bg-washed-red br2'
				type='search' 
				placeholder='search planets'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;