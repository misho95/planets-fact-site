import { useState } from "react";
import ContentCategoryButtons from "./content.category.buttons";
import MobileCategoryButtons from "./moble.category.buttons";

const Content = ({ dataToSend }) => {
  if (!dataToSend) {
    return <div>Loading...</div>;
  }

  const [active, setActive] = useState(1);

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full px-10 pt-0 sm:pt-20">
      <div className="flex flex-col lg:flex-row items-center lg:justify-evenly w-full gap-10">
        <div className="flex justify-between w-full sm:hidden">
          <MobileCategoryButtons
            id={1}
            name={dataToSend.name}
            title={"Overview"}
            active={active}
            setActive={setActive}
          />
          <MobileCategoryButtons
            id={2}
            name={dataToSend.name}
            title={"Structure"}
            active={active}
            setActive={setActive}
          />
          <MobileCategoryButtons
            id={3}
            name={dataToSend.name}
            title={"Surface"}
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="w-fit h-fit relative">
          <img
            src={
              active === 1
                ? dataToSend.icon
                : active === 2
                ? dataToSend.internalStructureIcon
                : dataToSend.icon
            }
            className="w-40 h-40 sm:w-80 sm:h-80"
          />
          {active === 3 && (
            <img
              src={dataToSend.surfaceIcon}
              className="w-10 sm:w-20 absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          )}
        </div>
        <div className="flex w-full lg:w-fit sm:justify-evenly lg:flex-col gap-8 justify-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl text-center sm:text-left">
              {dataToSend.name}
            </h1>
            <p className="w-80 text-center sm:text-left">{dataToSend.info}</p>
            <span className="text-white/30 text-center sm:text-left">
              Source{" "}
              <a href="#" className="text-white/50 underline">
                Wikipedia
              </a>
            </span>
          </div>
          <div className="hidden sm:flex flex-col gap-5 w-full">
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
      <div className="flex flex-col sm:flex-row w-full justify-evenly gap-3">
        <div className="border-2 border-white/50 p-3 flex sm:flex-col gap-3 min-w-min-200 justify-between items-center">
          <p className="text-white/50">Rotation Time</p>
          <h1 className="text-base sm:text-2xl">{dataToSend.rotationTime}</h1>
        </div>
        <div className="border-2 border-white/50 p-3 flex sm:flex-col gap-3 min-w-min-200 justify-between items-center">
          <p className="text-white/50">Revolution Time</p>
          <h1 className="text-base sm:text-2xl">{dataToSend.revolutionTime}</h1>
        </div>
        <div className="border-2 border-white/50 p-3 flex sm:flex-col gap-3 min-w-min-200 justify-between items-center">
          <p className="text-white/50">Radius</p>
          <h1 className="text-base sm:text-2xl">{dataToSend.radius} </h1>
        </div>
        <div className="border-2 border-white/50 p-3 flex sm:flex-col gap-3 min-w-min-200 justify-between items-center">
          <p className="text-white/50">Average Temp.</p>
          <h1 className="text-base sm:text-2xl">{dataToSend.averageTemp} oC</h1>
        </div>
      </div>
    </div>
  );
};
export default Content;
