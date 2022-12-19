import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from '../pages/login/login';
import Candidato from '../pages/candidato/candidato';

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/candidato" element={<Candidato />} />
        </Routes>
    )
}
