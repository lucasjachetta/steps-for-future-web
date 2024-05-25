import LandingPage from '../pages/LandingPage/LandingPage'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import LoggedPlans from '../pages/Plans/LoggedPlans/LoggedPlans'
import Plans from '../pages/Plans/Plans/Plans'
import Home from '../pages/Home/Home'
import Campaigns from '../pages/Campaigns/Campaigns'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/logged-plans" element={<LoggedPlans/>}></Route>
                <Route path="/plans" element={<Plans/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/campaigns" element={<Campaigns/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;