const Header = ({ planetsData, setActivePlanet }) => {
  return (
    <>
      <div className="flex justify-between p-10">
        <div className="text-2xl">THE PLANETS</div>
        <div className="flex gap-3">
          {planetsData.map((p) => {
            return (
              <span
                key={p.id}
                onClick={() => setActivePlanet(p.id)}
                className="text-white/75"
              >
                {p.name}
              </span>
            );
          })}
        </div>
      </div>
      <div className="h-px1 w-full bg-white/20"></div>
    </>
  );
};

export default Header;
