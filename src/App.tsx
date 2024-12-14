import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Loginpage from "./pages/LoginPage"
import MainPage from "./pages/MainPage"
import MovieDetailsPage from "./pages/MovieDetailPage"
import MovieListPage from "./pages/MovieListPage"
import AllMoviesPage from "./pages/AllMoviesPage"

function App() {
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Loginpage />,
		},
		{
			path: "/browse",
			element: <MainPage />,
		},
		{
			path: "/movie/:id",
			element: <MovieDetailsPage />,
		},
		{
			path: "/movies",
			element: <MovieListPage />,
		},
		{
			path: "/all-movies/:category",
			element: <AllMoviesPage />,
		},
	])
	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	)
}

export default App
