import { useState } from "react";
import { ReactComponent as Hamburger } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import MobileMenu from "../menu/MobileMenu";
import Menu from "../menu/Menu";

const Header = () => {
  const [modalIsOpen, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <header className="flex w-full justify-between px-6 pt-10 semi-xl:ml-auto semi-xl:mr-auto semi-xl:max-w-289 semi-xl:pt-18">
      <div className="w-36 semi-xl:w-48 semi-xl:-mt-2">
        <Logo />
      </div>
      <div className="sm:hidden">
        <button aria-label="open menu" onClick={handleOpenModal}>
          <Hamburger aria-hidden={true} focusable={false} />
        </button>
      </div>
      <MobileMenu isOpen={modalIsOpen} handleClose={handleCloseModal} />
      <Menu />
    </header>
  );
};

export default Header;
