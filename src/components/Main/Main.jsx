import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import Details from "./Details/Details"
import About from "./About/About"
import Contact from "./Contact/Contact"

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/item/:id" element={<Details />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Navigate to={"/"} />} />
            </Routes>
        </main>
    )
}

export default Main