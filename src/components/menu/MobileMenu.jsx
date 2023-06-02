import { Modal } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Close } from "../../assets/images/icon-close.svg";
import MobileNavigation from "./MobileNavigation";
import Zoom from "@mui/material/Zoom";

const MobileMenu = ({ isOpen, handleClose }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Zoom in={isOpen}>
        <div className="fixed bottom-0 left-0 right-0 top-0 bg-black outline-none">
          <div className="flex justify-between px-6 pt-10">
            <div className="w-36">
              <Logo />
            </div>
            <div>
              <button aria-label="close menu" onClick={handleClose}>
                <Close aria-hidden={true} focusable={false} />
              </button>
            </div>
          </div>
          <nav>
            <MobileNavigation />
          </nav>
        </div>
      </Zoom>
    </Modal>
  );
};

export default MobileMenu;
