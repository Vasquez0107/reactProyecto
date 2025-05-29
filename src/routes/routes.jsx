import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../feature/auth/pages/Login";

export const RoutesModule = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
};
