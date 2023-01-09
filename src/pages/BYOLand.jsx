import React from "react";

import { Outlet } from "react-router-dom";

import Tabs from "../components/templates/Tabs";

import BYOLandIcon from "../asset/BYOLand/BYOLand_Icon.png";

function BYOLand() {
  return (
    <>
      <Tabs imgsrc={BYOLandIcon} name="The Sandbox" />
      <Outlet />
    </>
  );
}

export default BYOLand;
