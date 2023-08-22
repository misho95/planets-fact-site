import { useState, useEffect } from "react";

const ContentCategoryButtons = ({ id, name, title, active, setActive }) => {
  const [bg, setBg] = useState("");
  useEffect(() => {
    switch (name.toLowerCase()) {
      case "mercury":
        setBg("bg-mercury_bg");
        return;
      case "venus":
        setBg("bg-venus_bg");
        return;
      case "earth":
        setBg("bg-earth_bg");
        return;
      case "mars":
        setBg("bg-mars_bg");
        return;
      case "jupiter":
        setBg("bg-jupiter_bg");
        return;
      case "saturn":
        setBg("bg-saturn_bg");
        return;
      case "uranus":
        setBg("bg-uranus_bg");
        return;
      case "neptune":
        setBg("bg-neptune_bg");
        return;
      default:
        setBg("bg-transparent");
        return;
    }
  }, [name]);

  return (
    <button
      onClick={() => setActive(id)}
      className={`flex gap-3 w-full ${
        active === id ? bg : "bg-transparent border-2 border-white/20"
      } p-3`}
    >
      <span className="text-white/50">0{id}</span>
      {title}
    </button>
  );
};

export default ContentCategoryButtons;
