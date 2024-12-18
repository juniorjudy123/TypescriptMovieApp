import "./index.css"
import {
	createBrowserRouter,
	RouterProvider,
	useNavigate,
} from "react-router-dom"
import Loginpage from "./pages/LoginPage"
import MainPage from "./pages/MainPage"
import MovieDetailsPage from "./pages/MovieDetailPage"
import MovieListPage from "./pages/MovieListPage"
import AllMoviesPage from "./pages/AllMoviesPage"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./utils/firebase"
import { useDispatch } from "react-redux"
import { addUser } from "./utils/slices/userSlice"

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log("user:", user)
				const { uid, email, displayName } = user
				dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
			} else {
				console.log("no user")
			}
		})
	}, [])

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
