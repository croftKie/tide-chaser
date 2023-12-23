import React from "react";
import Nav from "./appComps/Nav";
import Search from "./appComps/Search";
import Menu from "./appComps/Menu";
import InfoBar from "./appComps/infoBar";
import Dashboard from "./appComps/dashboard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setData, selectData } from "../redux/surfDataSlice";
import axios from "axios";
import { fetchData } from "../utilities/fetchData";

const Tidechaser = () => {
  const dispatch = useDispatch();
  const dataSelector = useSelector(selectData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="tide-app">
      <Nav />
      <Search />
      <InfoBar />
      <Dashboard />
      {/* <Menu /> */}
    </div>
  );
};

export default Tidechaser;
