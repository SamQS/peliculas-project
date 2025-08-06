import {BrowserRouter, Routes, Route} from "react-router-dom"
import { LadingPage } from "../pages/LadingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LadingPage />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>

    )
}