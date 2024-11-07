import { Provider } from "react-redux"

import HomePage from "./pages/HomePage"
import appStore from "./utils/appStore"

function App() {
	return (
		<Provider store={appStore}>
			<HomePage />
		</Provider>
	)
}

export default App
