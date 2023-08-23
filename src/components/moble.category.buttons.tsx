interface propsType {
  id: number;
  title: string;
  color: string;
  active: number;
  setActive: (id: number) => void;
}

const MobileCategoryButtons = ({
  id,
  title,
  color,
  active,
  setActive,
}: propsType) => {
  return (
    <button onClick={() => setActive(id)} className={`p-3`}>
      {title}
      <div
        className={`h-px1 mt-3 ${active === id ? color : "transparent"}`}
      ></div>
    </button>
  );
};

export default MobileCategoryButtons;
