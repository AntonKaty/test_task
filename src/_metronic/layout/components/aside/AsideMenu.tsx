import React, { useEffect } from "react";
import { useLocation } from "react-router";
import {
  DrawerComponent,
  ToggleComponent,
} from "../../../assets/ts/components";

type Props = {
  asideMenuCSSClasses: string[];
};

const AsideMenu: React.FC<Props> = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      DrawerComponent.reinitialization();
      ToggleComponent.reinitialization();
    }, 50);
  }, [pathname]);

  return <div></div>;
};

export { AsideMenu };
