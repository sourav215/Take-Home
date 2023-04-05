import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Travel from "./Travel/Travel";
const AllRoutes = () => {
  return (
    <div >
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/travel"} element={<Travel />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
