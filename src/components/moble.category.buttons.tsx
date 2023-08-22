import { useState, useEffect } from "react";

const MobileCategoryButtons = ({ id, name, title, active, setActive }) => {
  const [bg, setBg] = useState("");
  useEffect(() => {
    switch (name.toLowerCase()) {
      case "mercury":
        setBg("mercury_bg");
        return;
      case "venus":
        setBg("venus_bg");
        return;
      case "earth":
        setBg("earth_bg");
        return;
      case "mars":
        setBg("mars_bg");
        return;
      case "jupiter":
        setBg("jupiter_bg");
        return;
      case "saturn":
        setBg("saturn_bg");
        return;
      case "uranus":
        setBg("uranus_bg");
        return;
      case "neptune":
        setBg("neptune_bg");
        return;
      default:
        setBg("transparent");
        return;
    }
  }, [name]);

  return (
    <button
      onClick={() => setActive(id)}
      className={`${active === id ? "border-b-2" : ""} border-${bg} p-3`}
    >
      {title}
    </button>
  );
};

export default MobileCategoryButtons;
