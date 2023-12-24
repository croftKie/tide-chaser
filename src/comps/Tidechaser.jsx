import React from "react";
import Nav from "./appComps/Nav";
import Search from "./appComps/Search";
import Menu from "./appComps/Menu";
import InfoBar from "./appComps/infoBar";
import Dashboard from "./appComps/dashboard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectMenuState, selectMenuContent } from "../redux/uiSlice";
import { fetchData } from "../utilities/fetchData";

const Tidechaser = () => {
  const menuState = useSelector(selectMenuState);
  const menuContent = useSelector(selectMenuContent);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="tide-app">
      <Nav />
      <Search />
      <InfoBar />
      <Dashboard />
      {menuState ? <Menu menuContent={menuContent} /> : <></>}
    </div>
  );
};

export default Tidechaser;
