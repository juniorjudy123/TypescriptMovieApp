import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { Provider } from "react-redux"
import appStore from "./utils/appStore.tsx"

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
	<StrictMode>
		<Provider store={appStore}>
			<App />
		</Provider>
	</StrictMode>
)
