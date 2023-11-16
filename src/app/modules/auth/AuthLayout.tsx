import { useEffect } from "react";
import { Vertical } from "../wizards/components/Vertical";

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.height = "100%";
    }
    return () => {
      if (root) {
        root.style.height = "auto";
      }
    };
  }, []);

  return (
    <div className="d-flex flex-column flex-lg-row flex-column-fluid h-100">
      <Vertical />
    </div>
  );
};

export { AuthLayout };
