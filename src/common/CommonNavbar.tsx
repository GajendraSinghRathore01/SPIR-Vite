import { useNavigate, useLocation } from "react-router";

type Tab = {
  label: string;
  path: string;
};

type Props = {
  tabs: Tab[];
  onClick?: (tab: Tab) => void;
  containerClassName?: string;
  listClassName?: string;
  itemClassName?: string;
};

const CommonNavbar = ({
  tabs,
  onClick,
  containerClassName = "",
  listClassName = "",
  itemClassName = ""
}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (tab: Tab) => {
    onClick?.(tab);
    navigate(tab.path);
  };

  return (
    <div className={`bg-transparent p-2 ${containerClassName}`}>
      <ul className={`text-xl ${listClassName}`}>
        {tabs.map((data, index) => {
          const isActive = location.pathname === data.path;
          return (
            <li
              key={index}
              className={`
                hover:cursor-pointer
                hover:text-[#fa8a3f]
                ${isActive ? "text-[#fa8a3f]" : ""}
                ${itemClassName}
              `}
              onClick={() => handleClick(data)}
            >
              {data.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommonNavbar;
