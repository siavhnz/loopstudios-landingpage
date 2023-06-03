import { menu } from "../../store/menu";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="gap-x-8 sm:flex">
        {menu.map((item) => {
          return (
            <MenuItem menu={item} key={item} />
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
