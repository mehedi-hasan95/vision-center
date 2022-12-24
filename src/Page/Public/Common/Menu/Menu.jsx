import React from "react";
import { Link } from "react-router-dom";
import img from "../../../../Assets/images/logo.png";

const Menu = () => {
    return (
        <div className="flex justify-between items-center my-10 bg-[#44ABE3] text-white px-4">
            <Link>
                <img src={img} alt="" />
            </Link>
            <div className="flex gap-4">
                <Link
                    className=" bg-slate-800 px-3 py-2 hover:bg-green-700 font-semibold rounded-lg"
                    to="/user-login"
                >
                    User Login
                </Link>
                <Link
                    className=" bg-slate-800 px-3 py-2 hover:bg-green-700 font-semibold rounded-lg"
                    to="/doctor-login"
                >
                    Doctor Login
                </Link>
                <Link
                    className=" bg-slate-800 px-3 py-2 hover:bg-green-700 font-semibold rounded-lg"
                    to="/admin-login"
                >
                    Admin Login
                </Link>
            </div>
        </div>
    );
};

export default Menu;
