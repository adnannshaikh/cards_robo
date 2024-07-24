import React from 'react'
// import './Cards.css'


const Cards = ({name,email,id}) => {
	return (
		// <h1>Robo Friends</h1> can only return one thing
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt="Robots "src = {`https://robohash.org/${id}?size=200x200`}/> 
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Cards;