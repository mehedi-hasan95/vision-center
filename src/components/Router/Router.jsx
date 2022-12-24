import { createBrowserRouter } from "react-router-dom";
import Home from "../../Page/Public/Home/Home";
import AdminLogin from "../../Page/Public/Login/AdminLogin/AdminLogin";
import DoctorLogin from "../../Page/Public/Login/DoctorLogin/DoctorLogin";
import UserLogin from "../../Page/Public/Login/UserLogin/UserLogin";
import PatientRegister from "../../Page/User/PatientRegister/PatientRegister";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "user-login", element: <UserLogin></UserLogin> },
            { path: "doctor-login", element: <DoctorLogin></DoctorLogin> },
            { path: "admin-login", element: <AdminLogin></AdminLogin> },
            {
                path: "patient-register",
                element: <PatientRegister></PatientRegister>,
            },
        ],
    },
]);

export default router;
