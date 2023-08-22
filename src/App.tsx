import Header from "./components/header";
import Content from "./components/content";
import { useState, useEffect } from "react";
import mercuryImg from "./assets/planet-mercury.svg";
import internalStructureMercuryImg from "./assets/planet-mercury-internal.svg";
import mercurySurfaceImg from "./assets/geology-mercury.png";
import venusImg from "./assets/planet-venus.svg";
import venusInternalImg from "./assets/planet-venus-internal.svg";
import venusSurfaceImg from "./assets/geology-venus.png";
import earthImg from "./assets/planet-earth.svg";
import eartchInternalImg from "./assets/planet-earth-internal.svg";
import earthSurfaceImg from "./assets/geology-earth.png";
import marsImg from "./assets/planet-mars.svg";
import marsInternalImg from "./assets/planet-mars-internal.svg";
import marsSurfaceImg from "./assets/geology-mars.png";
import jupiterImg from "./assets/planet-jupiter.svg";
import jupiterInternalImg from "./assets/planet-jupiter-internal.svg";
import jupiterSurface from "./assets/geology-jupiter.png";
import saturnImg from "./assets/planet-saturn.svg";
import saturnInternalImg from "./assets/planet-saturn-internal.svg";
import saturnSurfaceImg from "./assets/geology-saturn.png";
import uranusImg from "./assets/planet-uranus.svg";
import uranusInternalImg from "./assets/planet-uranus-internal.svg";
import uranusSurfaceImg from "./assets/geology-uranus.png";
import neptuneImg from "./assets/planet-neptune.svg";
import neptuneInternalImg from "./assets/planet-neptune-internal.svg";
import neptuneSurfaceImg from "./assets/geology-neptune.png";

function App() {
  const planetsData = [
    {
      id: 0,
      name: "Mercury",
      info: `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`,
      icon: mercuryImg,
      internalStructureIcon: internalStructureMercuryImg,
      surfaceIcon: mercurySurfaceImg,
      rotationTime: "58.6 Days",
      revolutionTime: "87.97 Days",
      radius: "2,439.7 km",
      averageTemp: "430",
    },
    {
      id: 1,
      name: "Venus",
      info: `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`,
      icon: venusImg,
      internalStructureIcon: venusInternalImg,
      surfaceIcon: venusSurfaceImg,
      rotationTime: "243 Days",
      revolutionTime: "224.7 Days",
      radius: "6,051.8 km",
      averageTemp: "471",
    },
    {
      id: 2,
      name: "Earth",
      info: `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`,
      icon: earthImg,
      internalStructureIcon: eartchInternalImg,
      surfaceIcon: earthSurfaceImg,
      rotationTime: "0.99 Days",
      revolutionTime: "365.26 Days",
      radius: "6,371 km",
      averageTemp: "16",
    },
    {
      id: 3,
      name: "Mars",
      info: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`,
      icon: marsImg,
      internalStructureIcon: marsInternalImg,
      surfaceIcon: marsSurfaceImg,
      rotationTime: "1.03 Days",
      revolutionTime: "1.88 Years",
      radius: "3,389.5 km",
      averageTemp: "-28",
    },
    {
      id: 4,
      name: "Jupiter",
      info: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`,
      icon: jupiterImg,
      internalStructureIcon: jupiterInternalImg,
      surfaceIcon: jupiterSurface,
      rotationTime: "9.93 hours",
      revolutionTime: "11.86 years",
      radius: "69,911 km",
      averageTemp: "-108",
    },
    {
      id: 5,
      name: "Saturn",
      info: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`,
      icon: saturnImg,
      internalStructureIcon: saturnInternalImg,
      surfaceIcon: saturnSurfaceImg,
      rotationTime: "10.8 hours",
      revolutionTime: "29.46 years",
      radius: "58,232 km",
      averageTemp: "-138",
    },
    {
      id: 6,
      name: "Uranus",
      info: `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`,
      icon: uranusImg,
      internalStructureIcon: uranusInternalImg,
      surfaceIcon: uranusSurfaceImg,
      rotationTime: "17.2 hours",
      revolutionTime: "84 years",
      radius: "25,362 km",
      averageTemp: "195",
    },
    {
      id: 7,
      name: "Neptune",
      info: `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`,
      icon: neptuneImg,
      internalStructureIcon: neptuneInternalImg,
      surfaceIcon: neptuneSurfaceImg,
      rotationTime: "16.08 hours",
      revolutionTime: "164.79 years",
      radius: "24,622 km",
      averageTemp: "-201",
    },
  ];

  const [activePlanet, setActivePlanet] = useState(0);
  const [dataToSend, setDataToSend] = useState();

  useEffect(() => {
    setDataToSend(planetsData[activePlanet]);
  }, [activePlanet]);

  return (
    <>
      <Header setActivePlanet={setActivePlanet} planetsData={planetsData} />
      <Content dataToSend={dataToSend} />
    </>
  );
}

export default App;
