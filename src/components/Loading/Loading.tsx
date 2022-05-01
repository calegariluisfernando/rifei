import React from "react";

import './Loading.scss';

export default function Loading(): JSX.Element {

    return (
        <div className="WrapCLoading">
            <div className="CLoadingBackground" />
            <div className="CLoadingContent">
                <div className="CLoadingRingRotation CLoadingRing-1" />
                <div className="CLoadingRingRotation CLoadingRing-2" />
                <div className="CLoadingRingRotation CLoadingRing-3" />

                {/*<div className="CLoadingImgLogo">*/}
                {/*    <img src={logoCar} alt="Logo" className="img-fluid"/>*/}
                {/*</div>*/}
                <div className="CLoadingMessage">
                    <small className="text-muted font-monospace">
                        <i>Carregando...</i>
                    </small>
                </div>
            </div>
        </div>
    );
}