import menuIcon from "../assets/icon-hamburger.svg";

const Header = ({ planetsData, setActivePlanet }) => {
  return (
    <>
      <div className="flex sm:flex-col gap-5 lg:gap-0 justify-between p-10 lg:flex-row">
        <div className="text-2xl text-center">THE PLANETS</div>
        <div className="hidden sm:flex justify-around lg:justify-normal lg:gap-3">
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
        <div className=" sm:hidden">
          <img src={menuIcon} />
        </div>
      </div>
      <div className="h-px1 w-full bg-white/20"></div>
    </>
  );
};

export default Header;
