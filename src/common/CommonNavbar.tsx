type Tab = {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
};

type Props = {
  tabs: Tab[];
  onClick?: () => void;
  containerClassName?: string;
  listClassName?: string;
  itemClassName?: string;
};

const CommonNavbar = ({
  tabs,
  onClick,
  containerClassName = "",
  listClassName = "",
  itemClassName = "",
}: Props) => {
  const handleClick = (tab: Tab) => {
    tab.onClick?.();
    onClick?.();
  };

  return (
    <div className={`bg-transparent p-2 ${containerClassName}`}>
      <ul className={`text-xl ${listClassName}`}>
        {tabs?.map((data, index) => (
          <li
            key={index}
            className={`
       hover:cursor-pointer
    hover:text-[#fa8232]
    ${data.isActive ? "text-[#0d6efd] bg-blue-50 " : ""}
    ${itemClassName}
  `}
            onClick={() => handleClick(data)}
          >
            {data?.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommonNavbar;
