import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Auth from "./Components/Pages/Auth/Auth";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import MyOrders from "./Components/Pages/Dashboard/MyOrders";
import AddReview from "./Components/Pages/Dashboard/AddReview";
import ManageUsers from "./Components/Pages/Dashboard/ManageUsers";
import AddProduct from "./Components/Pages/Dashboard/AddProduct";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Product from "./Components/Pages/Product/Product";
import RequireAuth from "./Components/Pages/Auth/RequireAuth";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Auth></Auth>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/products" element={<Product></Product>}></Route>
                <Route
                    path="/purchase"
                    element={
                        <RequireAuth>
                            <Purchase></Purchase>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                    <Route index element={<MyProfile></MyProfile>}></Route>
                    <Route
                        path="my-order"
                        element={<MyOrders></MyOrders>}
                    ></Route>
                    <Route
                        path="add-review"
                        element={<AddReview></AddReview>}
                    ></Route>
                    <Route
                        path="manage-user"
                        element={<ManageUsers></ManageUsers>}
                    ></Route>
                    <Route
                        path="manage-order"
                        element={<MyOrders></MyOrders>}
                    ></Route>
                    <Route
                        path="add-product"
                        element={<AddProduct></AddProduct>}
                    ></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
