import React from "react";

import TriggerSidenav from "../Sidenav/ButtonTrigger/TriggerSidenav";
import { ISidenav } from "../Sidenav/ISidenav";

import "./Header.scss";

export default function Header({ isOpen, setIsOpen }: ISidenav) {
    return (
        <header className="header-page">
            <TriggerSidenav isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}