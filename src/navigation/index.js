import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/Homepage";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

function Navigation() {
    return (
        <div className="Navigation">
            <main className="">
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                </BrowserRouter>
            </main>
        </div>
    )
}

export default Navigation;