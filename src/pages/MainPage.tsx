import HeaderComponent from "../components/HeaderComponent"
import HeroComponent from "../components/HeroComponent.tsx"
import SecondaryComponent from "../components/SecondaryComponent.tsx"
import useMovies from "../hooks/useMovies.ts"

const MainPage = () => {
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
			<HeaderComponent />
			<HeroComponent />
			<SecondaryComponent />
		</div>
	)
}

export default MainPage
