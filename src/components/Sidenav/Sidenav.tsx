import React from "react";

import { ISidenav } from "./ISidenav";
import imgFusca from "../../imagens/285806_auto_vehicle_beetle_vw_car_icon.svg";
import "./Sidenav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Sidenav({ isOpen, setIsOpen, user }: ISidenav) {

    return (
        <nav className={`sidenav${isOpen ? ' isOpen' : ''}`}>

            <OverlaySidenav isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="sidenav-content">
                <div className="sidenav-header">

                    <ButtonCloseSidenav isOpen={isOpen} setIsOpen={setIsOpen} />
                    <LogoSidenav />
                    <UserDataSidenav user={user} setIsOpen={setIsOpen} />
                    <div className="sidenav-list-itens" />
                </div>
            </div>
        </nav>
    );
}

function OverlaySidenav({ isOpen, setIsOpen }: ISidenav) {

    return <div className="overlay-sidenav" onClick={() => setIsOpen(!isOpen)} />
}

function ButtonCloseSidenav({ isOpen, setIsOpen }: ISidenav) {

    return (
        <button
            className="btn btn-default sidenav-close"
            onClick={() => setIsOpen(!isOpen)}
        >
            &times;
        </button>
    )
}

function LogoSidenav() {
    return (
        <div className="sidenav-logo">
            <div className="wrap-logo-sidenav">
                <img src={imgFusca} alt="Logo White Fusca" className="img-fluid" />
                <span className="text-white">Fusca Calegari</span>
            </div>
        </div>
    )
}

function UserDataSidenav({ user }: ISidenav) {

    return (
        <div className="sidenav-user-data">
            <div className="wrap-user-data-sidenav">
                <div className="img-avatar rounded-circle">
                    {
                        user?.avatar
                            ? <img src={user.avatar} alt="Avatar User" className="w-100" />
                            : <FontAwesomeIcon icon={faUser} size="2x" />
                    }
                </div>
                <span className="user-data-name">{user?.firstName}</span>
            </div>
        </div>
    )
}
