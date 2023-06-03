import { menu } from "../../store/menu";
import MenuItem from "./MenuItem";

const FooterMenu = () => {
  return (
    <ul className="flex flex-col gap-y-4 text-center lg:flex-row lg:gap-x-8">
      {menu.map((item) => {
        return <MenuItem menu={item} key={item} />;
      })}
    </ul>
  );
};

export default FooterMenu;
