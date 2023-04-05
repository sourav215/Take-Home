import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Travel from "./Travel/Travel";
import ErrorPage from "../Components/Error/ErrorPage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/travel-details"} element={<Travel />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
