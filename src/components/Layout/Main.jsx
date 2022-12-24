import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Page/Public/Common/Footer/Footer";
import Menu from "../../Page/Public/Common/Menu/Menu";

const Main = () => {
    return (
        <div>
            <Menu></Menu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
