import React, { useReducer } from "react";

const PatientRegister = () => {
    const initialState = {
        firstname: "",
        kin: "",
        year: "",
        month: "",
        day: "",
        sex: "",
        mobile: "",
        address: "",
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                };
            default:
                return state;
        }
    };

    const [state, dispath] = useReducer(reducer, initialState);
    const submitPatient = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <section className="p-6 bg-gray-800 text-gray-50">
            <form
                onSubmit={submitPatient}
                className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Patient Inormation</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">
                                Patient name
                            </label>
                            <input
                                id="firstname"
                                name="firstname"
                                type="text"
                                placeholder="Patient name"
                                className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                                onBlur={(e) =>
                                    dispath({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">
                                Next of Kin
                            </label>
                            <input
                                id="lastname"
                                name="kin"
                                type="text"
                                placeholder="Kin name"
                                className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                                onBlur={(e) =>
                                    dispath({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="year" className="text-sm">
                                Age
                            </label>
                            <input
                                id="year"
                                name="year"
                                type="text"
                                placeholder="Year"
                                className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                                onBlur={(e) =>
                                    dispath({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="month" className="text-sm">
                                Month
                            </label>
                            <input
                                id="month"
                                name="month"
                                type="text"
                                placeholder="Month"
                                className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                                onBlur={(e) =>
                                    dispath({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="day" className="text-sm">
                                Day
                            </label>
                            <input
                                id="day"
                                name="day"
                                type="text"
                                placeholder="Day"
                                className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                                onBlur={(e) =>
                                    dispath({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="sex" className="text-sm">
                                Sex
                            </label>
                            <select
                                name="sex"
                                id="sex"
                                className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                                onClick={(e) =>
                                    dispath({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        },
                                    })
                                }
                            >
                                <option value=""></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="mobile" className="text-sm">
                                Mobile
                            </label>
                            <input
                                id="mobile"
                                name="mobile"
                                type="tel"
                                placeholder="Mobile Number"
                                className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                                onBlur={(e) =>
                                    dispath({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="address" className="text-sm">
                                Address
                            </label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                placeholder=""
                                className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                                onBlur={(e) =>
                                    dispath({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">
                                City
                            </label>
                            <input
                                id="city"
                                type="text"
                                placeholder=""
                                className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">
                                State / Province
                            </label>
                            <input
                                id="state"
                                type="text"
                                placeholder=""
                                className="w-full rounded-md px-3 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                            />
                        </div>
                        <input
                            type="submit"
                            value="Register User"
                            className="bg-white px-4 py-3 rounded-lg cursor-pointer font-semibold text-black mx-auto mt-12 border-2 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-black duration-[400ms,700ms] transition-[color,box-shadow]"
                        />
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default PatientRegister;
