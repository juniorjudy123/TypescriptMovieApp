import { useNavigate } from "react-router-dom"
import { POSTER_URL } from "../utils/constants"

const MovieCardComponent = ({ id, posterpath }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(`/movie/${id}`)
	}
	return (
		<div className="w-52 pr-4 cursor-pointer " onClick={handleClick}>
			<img alt="movieCard" src={POSTER_URL + posterpath}></img>
		</div>
	)
}

export default MovieCardComponent
