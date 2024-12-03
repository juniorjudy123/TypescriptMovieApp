import { useNavigate } from "react-router-dom"
import { POSTER_URL } from "../utils/constants"
import { MovieCardType } from "../types/MovieDetailType"

const MovieCardComponent = ({ id, poster_path }: MovieCardType) => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(`/movie/${id}`)
	}
	return (
		<div className="w-52 pl-1 pr-1 cursor-pointer " onClick={handleClick}>
			<img alt="movieCard" src={POSTER_URL + poster_path} />
		</div>
	)
}

export default MovieCardComponent
