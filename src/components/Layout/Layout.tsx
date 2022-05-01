import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/Auth/AuthContext";

import Header from "../Header/Header";
import Sidenav from "../Sidenav/Sidenav";

import "./Layout.scss";

export default function Layout() {

    const [isOpen, setIsOpen] = useState(true);
    const { user } = useAuth();

    return (
        <div id="wrapApp">

            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <Sidenav isOpen={isOpen} setIsOpen={setIsOpen} user={user} />

            <Outlet />
        </div>
    )
}