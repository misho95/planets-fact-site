import Header from "./components/header";
import Content from "./components/content";

function App() {
  const planetsData = [
    {
      id: 1,
      name: "Mercury",
      info: `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`,
    },
    { id: 2, name: "Venus" },
    { id: 3, name: "Earth" },
    { id: 4, name: "Mars" },
    { id: 5, name: "Jupiter" },
    { id: 6, name: "Saturn" },
    { id: 7, name: "Uranus" },
    { id: 8, name: "Neptune" },
  ];

  return (
    <>
      <Header planetsData={planetsData} />
      <Content />
    </>
  );
}

export default App;
