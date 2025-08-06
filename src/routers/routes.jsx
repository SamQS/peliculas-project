import {HashRouter, Routes, Route} from "react-router-dom"
import { LadingPage } from "../pages/LadingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function MyRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LadingPage />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </HashRouter>

    )
}