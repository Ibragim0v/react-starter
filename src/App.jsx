import Button from "@mui/material/Button"

export function App() {
    return (
        <div className="App">
            <Button onClick={() => console.log("hello")} variant="contained">
                next
            </Button>
        </div>
    )
}
