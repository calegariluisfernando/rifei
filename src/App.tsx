import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NoMatch from './pages/NoMatch/NoMatch';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoadingProvider from "./contexts/Loading/LoadingContext";
import Layout from './components/Layout/Layout';

export default function App() {

    return (
        <LoadingProvider>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Layout />} >
                    <Route
                        path="dashboard"
                        element={<PrivateRoute><Dashboard /></PrivateRoute>}
                    />
                </Route>

                <Route path="*" element={<NoMatch />} />
            </Routes>
        </LoadingProvider>
    );
}