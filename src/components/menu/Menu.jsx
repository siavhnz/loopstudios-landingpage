import { menu } from "../../store/menu";

const Menu = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="gap-x-8 sm:flex">
        {menu.map((item) => {
          return (
            <li key={item} className="group font-josefin text-white">
              <a href="#">{item}</a>
              <div className="ml-auto mr-auto h-[2px] w-1/2 bg-transparent transition-all duration-1000 group-hover:bg-white" />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
