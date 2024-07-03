import { useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownDemo from "../dropdownDemo/DropdownDemo";
import MobileMenu from "../mobileMenu/MobileMenu";
import HeaderWrapper from "./Header.style";

import { HiMenuAlt3 } from "react-icons/hi";
import Discord from "../../../assets/images/icons/discord.svg";
import Telegram from "../../../assets/images/icons/telegram.svg";
import Twitter from "../../../assets/images/icons/twitter.svg";
import Logo from "../../../assets/images/logo-2.png";
import Whitepaper from "../../../assets/pdf/whitepaper.pdf";
import ConnectWalletButton from "../../connectWalletButton/ConnectWalletButton";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <>
      <HeaderWrapper className="header-section">
        <div className="container">
          <div className="gittu-header-content">
            <div className="gittu-header-left">
              <ul className="social-links">
                <li>
                  <a
                    href="https://t.me/metaestateempire"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Telegram} alt="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Discord} alt="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Metaestatempire"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="icon" />
                  </a>
                </li>
              </ul>
              <ul className="gittu-header-left-menu">
                <li>
                  <a href={Whitepaper} target="_blank" rel="noreferrer">
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>
            <div className="gittu-header-center">
              <NavLink className="gittu-header-logo" to="/" end>
                <img src={Logo} alt="Logo" />
              </NavLink>
            </div>
            <div className="gittu-header-right">
              <div className="gittu-header-menu-toggle">
                <button className="menu-toggler" onClick={handleMobileMenu}>
                  <HiMenuAlt3 />
                </button>
              </div>
              <div className="gittu-header-right-menu">
                

                <DropdownDemo />
              </div>
            </div>
          </div>
        </div>
      </HeaderWrapper>
      {isMobileMenu && <MobileMenu mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
