import { StrictMode } from "react"
import { createRoot } from "react-dom/client" // Correct import
import "./index.css"
import App from "./App.tsx"
import { Provider } from "react-redux"
import appStore from "./utils/appStore.tsx"

// Create root element using createRoot from react-dom/client
const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
	<StrictMode>
		<Provider store={appStore}>
			<App />
		</Provider>
	</StrictMode>
)
