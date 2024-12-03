import React from "react"
import { useDispatch, useSelector } from "react-redux"

const PaginationComponent = () => {
	const dispatch = useDispatch()
	const nowPlayingMovies = useSelector((store) => store.movies)
	return <div>PaginationComponent</div>
}

export default PaginationComponent
