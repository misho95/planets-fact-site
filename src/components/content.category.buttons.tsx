interface propsType {
  id: number;
  title: string;
  color: string;
  active: number;
  setActive: (id: number) => void;
}

const ContentCategoryButtons = ({
  id,
  title,
  color,
  active,
  setActive,
}: propsType) => {
  return (
    <button
      onClick={() => setActive(id)}
      className={`flex gap-3 w-full ${
        active === id
          ? `bg-${color}`
          : "bg-transparent border-2 border-white/20"
      } p-3`}
    >
      <span className="text-white/50">0{id}</span>
      {title}
    </button>
  );
};

export default ContentCategoryButtons;
