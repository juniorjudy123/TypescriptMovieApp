import React from "react"
import { POSTER_URL } from "../utils/constants"

const MovieCardComponent = ({ posterpath }) => {
	return (
		<div className="w-52 pr-4">
			<img alt="movieCard" src={POSTER_URL + posterpath}></img>
		</div>
	)
}

export default MovieCardComponent
