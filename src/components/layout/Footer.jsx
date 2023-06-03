import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Facebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../assets/images/icon-instagram.svg";
import FooterMenu from "../menu/FooterMenu";
import SocialIcon from "../ui/SocialIcon";

const Footer = () => {
  return (
    <footer className="mt-24 bg-black lg:mt-40">
      <div className="px-6 pb-8 lg:ml-auto lg:mr-auto lg:flex lg:max-w-289 lg:justify-between">
        <div className="pt-14 lg:pt-12">
          <div className="ml-auto mr-auto w-36 lg:ml-0">
            <Logo />
          </div>
          <div className="flex justify-center pt-8 lg:pt-7">
            <FooterMenu />
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-x-4 pt-10 lg:justify-end lg:pt-12">
            <SocialIcon
              icon={<Facebook aria-hidden={true} focusable={false} />}
              platform="facebook"
            />
            <SocialIcon
              icon={<Twitter aria-hidden={true} focusable={false} />}
              platform="twitter"
            />
            <SocialIcon
              icon={<Pinterest aria-hidden={true} focusable={false} />}
              platform="pinterest"
            />
            <SocialIcon
              icon={<Instagram aria-hidden={true} focusable={false} />}
              platform="instagram"
            />
          </div>
          <p className="pt-3 text-center font-josefin text-base text-dark-gray lg:pt-4">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
