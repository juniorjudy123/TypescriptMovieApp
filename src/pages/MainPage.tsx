import { useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import HeroComponent from "../components/HeroComponent.tsx"
import SecondaryComponent from "../components/SecondaryComponent.tsx"
import useMovies from "../hooks/useMovies.ts"

const MainPage = () => {
	const [searchQuery, setSearchQuery] = useState("") // State for search query
	const [isSearch, setIsSearch] = useState(false) // State to track if it's a search query
	useMovies(
		"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
	)
	useMovies("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1")
	useMovies(
		"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
	)
	useMovies("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1")
	useMovies("https://api.themoviedb.org/3/trending/movie/day?language=en-US")

	return (
		<div className="overflow-x-hidden">
			<HeaderComponent
				setSearchQuery={setSearchQuery}
				setIsSearch={setIsSearch}
			/>
			<HeroComponent />
			<SecondaryComponent />
		</div>
	)
}

export default MainPage
