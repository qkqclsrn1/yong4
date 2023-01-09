import React from "react";

import { Outlet } from "react-router-dom";

import Tabs from "../components/templates/Tabs";

import TheSandboxIcon from "../asset/TheSandbox/TheSandbox_Icon.png";

function TheSandbox() {
  return (
    <>
      <Tabs imgsrc={TheSandboxIcon} name="The Sandbox" />
      <Outlet />
    </>
  );
}

export default TheSandbox;
