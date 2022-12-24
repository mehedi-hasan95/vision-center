import React from "react";
import { Link } from "react-router-dom";
import doctorIcon from "../../../../Assets/images/doctor_icon.jpg";

const DoctorLogin = () => {
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100 mx-auto">
            <h1 className="text-2xl font-bold text-center flex gap-5 items-center">
                <img src={doctorIcon} alt="" /> Login as Doctor
            </h1>
            <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-400">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-400">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                    />
                    <div className="flex justify-end text-xs text-gray-400">
                        <Link rel="noopener noreferrer" to="">
                            Forgot Password?
                        </Link>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default DoctorLogin;
