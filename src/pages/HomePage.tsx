import HeroComponent from "../components/HeroComponent"
import MovieCardComponent from "../components/MovieCardComponent"
import NavBarComponent from "../components/NavBarComponent"

const HomePage = () => {
	return (
		<div className="bg-black min-h-screen ">
			<NavBarComponent />
			<HeroComponent />
			<MovieCardComponent />
		</div>
	)
}

export default HomePage
