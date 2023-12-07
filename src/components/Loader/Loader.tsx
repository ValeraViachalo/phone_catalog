import React from "react";

import { Ping } from "@uiball/loaders";
import "./Loader.scss";
import { useTheme } from "../../contexts/ThemeContext";

export const Loader = () => {
  const { theme } = useTheme();

  return (
    <div className="loader">
      <Ping size={65} speed={1.8} color={theme === "dark" ? "white" : "black"} />
    </div>
  );
};
