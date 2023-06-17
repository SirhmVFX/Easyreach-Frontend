import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/Homepage";

function Navigation() {
    return (
        <div className="Navigation">
            <main className="">
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
                </BrowserRouter>
            </main>
        </div>
    )
}

export default Navigation;