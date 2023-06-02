import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MobileMenuItem = ({ menu }) => {
  return (
    <motion.li variants={variants}>
      <a
        className="font-josefin text-2xl uppercase leading-9 text-white"
        href="#"
      >
        {menu}
      </a>
    </motion.li>
  );
};

export default MobileMenuItem;
