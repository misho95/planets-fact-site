const Header = ({ planetsData }) => {
  return (
    <>
      <div className="flex justify-between p-10">
        <div className="text-white text-2xl">THE PLANETS</div>
        <div className="flex gap-3">
          {planetsData.map((p) => {
            return (
              <a key={p.id} href="#" className="text-white/75">
                {p.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className="h-px1 w-full bg-white/20"></div>
    </>
  );
};

export default Header;
