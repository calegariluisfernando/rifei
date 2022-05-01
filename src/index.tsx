import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./contexts/Auth/AuthContext";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);