import { useNavigate } from "react-router-dom"
import { POSTER_URL } from "../utils/constants"
import { MovieCardType } from "../types/MovieDetailType"
import movieapplogo from "../assets/movieapplogo.jpg"

const MovieCardComponent = ({ id, poster_path }: MovieCardType) => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(`/movie/${id}`)
	}
	return (
		<div
			className="relative w-53 h-60 pr-2 cursor-pointer rounded-xl overflow-hidden  transition-all transform hover:scale-90 hover:translate-y-[-10px] hover:shadow-xl"
			onClick={handleClick}
		>
			<img
				className="w-full h-54 object-fill rounded-xl p-1 absolute"
				alt="movieCard"
				src={POSTER_URL + poster_path}
			/>
			<img
				src={movieapplogo}
				className=" opacity-75 w-20 rounded-full p-5 absolute bottom-1  right-1  z-10"
				alt="movieapp-logo"
			></img>
		</div>
	)
}

export default MovieCardComponent
