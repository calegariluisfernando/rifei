import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { ISidenav } from "../ISidenav";

import imgFusca from "../../../imagens/285806_auto_vehicle_beetle_vw_car_icon.svg";
import "./TriggerSidenav.scss";

export default function TriggerSidenav({ isOpen, setIsOpen }: ISidenav) {

    return (
        <div className="menu-actions">
            <button
                className="btn btn-default btn-trigger-sidenav"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            <img src={imgFusca} alt="Logo" className="img-fluid" />
        </div>
    );
}