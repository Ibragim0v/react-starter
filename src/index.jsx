import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from "./styles/global-style"
import { App } from "./App"
import "bootstrap/dist/js/bootstrap"

const root = createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <GlobalStyles />
        <App />
    </BrowserRouter>
)
