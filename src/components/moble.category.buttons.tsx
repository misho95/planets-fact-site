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
    <button
      onClick={() => setActive(id)}
      className={`${active === id ? `border-b-2` : ""} text-${color} p-3`}
    >
      {title}
    </button>
  );
};

export default MobileCategoryButtons;
