import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Router/Router";

function App() {
    return (
        <div className=" max-w-screen-lg mx-auto px-2">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
