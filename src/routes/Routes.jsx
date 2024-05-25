import LandingPage from '../pages/LandingPage/LandingPage'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import LoggedPlans from '../pages/Plans/LoggedPlans/LoggedPlans'
import Plans from '../pages/Plans/Plans/Plans'
import ComingSoon from '../pages/ComingSoon/ComingSoon'
// import Info from '../pages/Info/Info'
// import Objectives from '../pages/Objectives/Objectives'
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
                {/* <Route path="/profile" element={<ComingSoon/>}></Route>
                <Route path="/config" element={<ComingSoon/>}></Route> */}
                <Route path="/coming-soon" element={<ComingSoon/>}></Route>
                {/* <Route path="/info" element={<Info/>}></Route>
                <Route path="/objectives" element={<Objectives/>}></Route> */}
            </Routes>
        </Router>
    )
}

export default AppRoutes;