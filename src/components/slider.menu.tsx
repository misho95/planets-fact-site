interface planetsDataType {
  id: number;
  name: string;
  info: string;
  icon: string;
  internalStructureIcon: string;
  surfaceIcon: string;
  rotationTime: string;
  revolutionTime: string;
  radius: string;
  averageTemp: string;
  color: string;
}

interface PropsType {
  planetsData: planetsDataType[];
  setActivePlanet: (id: number) => void;
  setShowMenu: (arg0: boolean) => void;
}

const SliderMenu = ({
  planetsData,
  setActivePlanet,
  setShowMenu,
}: PropsType) => {
  console.log(planetsData);
  return (
    <div className="w-full h-sliderMenuH bg-main_bg left-0 top-28 z-50 overflow-hidden flex flex-col gap-3">
      {planetsData.map((p) => {
        return (
          <div
            onClick={() => {
              setActivePlanet(p.id), setShowMenu(false);
            }}
            key={p.id}
            className="p-5 font-bold text-lg flex gap-3 items-center cursor-pointer"
          >
            <div className={`bg-${p.color} w-4 h-4 rounded-full`}></div>
            {p.name}
          </div>
        );
      })}
    </div>
  );
};

export default SliderMenu;
