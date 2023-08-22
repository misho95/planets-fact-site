import { useState } from "react";
import ContentCategoryButtons from "./content.category.buttons";

const Content = ({ dataToSend }) => {
  if (!dataToSend) {
    return <div>Loading...</div>;
  }

  const [active, setActive] = useState(1);

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full pt-20">
      <div className="flex justify-evenly gap-10 w-full">
        <div className="w-fit h-fit relative">
          <img
            src={
              active === 1
                ? dataToSend.icon
                : active === 2
                ? dataToSend.internalStructureIcon
                : dataToSend.icon
            }
            className="w-80 h-80"
          />
          {active === 3 && (
            <img
              src={dataToSend.surfaceIcon}
              className="w-20 absolute bottom-10 left-1/2 -translate-x-1/2"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl">{dataToSend.name}</h1>
          <p className="w-80">{dataToSend.info}</p>
          <span className="text-white/30">
            Source{" "}
            <a href="#" className="text-white/50 underline">
              Wikipedia
            </a>
          </span>
          <div className="flex flex-col gap-5">
            <ContentCategoryButtons
              id={1}
              name={dataToSend.name}
              title={"Overview"}
              active={active}
              setActive={setActive}
            />
            <ContentCategoryButtons
              id={2}
              name={dataToSend.name}
              title={"Internal Structure"}
              active={active}
              setActive={setActive}
            />
            <ContentCategoryButtons
              id={3}
              name={dataToSend.name}
              title={"Surface Geology"}
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-20">
        <div className="border-2 border-white/50 p-3 flex flex-col gap-3 min-w-min-200">
          <p className="text-white/50">Rotation Time</p>
          <h1 className="text-2xl">{dataToSend.rotationTime}</h1>
        </div>
        <div className="border-2 border-white/50 p-3 flex flex-col gap-3 min-w-min-200">
          <p className="text-white/50">Revolution Time</p>
          <h1 className="text-2xl">{dataToSend.revolutionTime}</h1>
        </div>
        <div className="border-2 border-white/50 p-3 flex flex-col gap-3 min-w-min-200">
          <p className="text-white/50">Radius</p>
          <h1 className="text-2xl">{dataToSend.radius} </h1>
        </div>
        <div className="border-2 border-white/50 p-3 flex flex-col gap-3 min-w-min-200">
          <p className="text-white/50">Average Temp.</p>
          <h1 className="text-2xl">{dataToSend.averageTemp} oC</h1>
        </div>
      </div>
    </div>
  );
};
export default Content;
