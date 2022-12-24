import React, { useReducer } from "react";

const UserRegister = () => {
    const initialState = {
        name: "",
        email: "",
        center: "",
        password: "",
        confirm: "",
        files: "",
        status: "user",
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

    const registerUser = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <div className="mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
            <h1 className="text-2xl font-bold text-center">Register User</h1>
            <form
                onSubmit={registerUser}
                className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block text-gray-400">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="User Name"
                        className="w-full px-4 py-3 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
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
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-gray-400">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="User Email"
                        className="w-full px-4 py-3 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
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
                <div className="space-y-1 text-sm">
                    <label htmlFor="center" className="block text-gray-400">
                        Center Name
                    </label>
                    <select
                        name="center"
                        id="center"
                        className="w-full px-4 py-3 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
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
                        <option value="bagha">Bagha</option>
                        <option value="bagmara">Bagmara</option>
                    </select>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-gray-400">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
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
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-gray-400">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirm"
                        placeholder="Confirm Password"
                        className="w-full px-4 py-3 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
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
                <fieldset className="w-full space-y-1 text-gray-100">
                    <label
                        htmlFor="files"
                        className="block text-sm font-medium"
                    >
                        Attach Signiture
                    </label>
                    <div className="flex">
                        <input
                            type="file"
                            name="files"
                            id="files"
                            className="px-8 py-12 border-2 border-dashed rounded-md border-gray-700 text-gray-400 bg-gray-800"
                        />
                    </div>
                </fieldset>
                <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
                    Registration
                </button>
            </form>
        </div>
    );
};

export default UserRegister;
