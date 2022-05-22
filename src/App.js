import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Auth from "./Components/Pages/Auth/Auth";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Auth></Auth>}></Route>
                <Route path="/purchase" element={<Purchase></Purchase>}></Route>
                <Route
                    path="/dashboard"
                    element={<Dashboard></Dashboard>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
