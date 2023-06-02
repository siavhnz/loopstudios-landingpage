import MobileMenuItem from "./MobileMenuItem";
import { motion } from "framer-motion";
import { menu } from "../../store/menu";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MobileNavigation = () => {

  return (
    <motion.ul
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
      className="mt-38 flex min-h-screen flex-col gap-y-3 px-6"
    >
      {menu.map((item) => {
        return <MobileMenuItem key={item} menu={item} />;
      })}
    </motion.ul>
  );
};

export default MobileNavigation;
