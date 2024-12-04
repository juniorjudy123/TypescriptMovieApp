import { useNavigate } from "react-router-dom"
import { POSTER_URL } from "../utils/constants"
import { MovieCardType } from "../types/MovieDetailType"

const MovieCardComponent = ({ id, poster_path }: MovieCardType) => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(`/movie/${id}`)
	}
	return (
		<div
			className="w-53 h-60 pr-2 cursor-pointer rounded-xl overflow-hidden  transition-all transform hover:scale-90 hover:translate-y-[-10px] hover:shadow-xl"
			onClick={handleClick}
		>
			<img
				className="w-full h-54 object-fill rounded-xl p-1"
				alt="movieCard"
				src={POSTER_URL + poster_path}
			/>
		</div>
	)
}

export default MovieCardComponent
