import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../start/start";
import UserCard from "../user_card/user_card";

const AppRoutes=() =>(
  <Routes>
    <Route path="/user/:login" element={<UserCard />} />
    <Route path="/" element={<Start />} />
  </Routes>
);

export default AppRoutes;
