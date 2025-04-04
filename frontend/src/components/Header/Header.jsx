import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();


  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src="./image.png" alt="logo" width={150} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >

            <a className="a" href="#">Home</a>
            <a className="a" href="#features">Features</a>
            {/* <a className="a" href="#value">Pricing</a> */}
            <a className="a" href="#contact-us">Contact</a>
            <a className="a" href="#about-us">About Us</a>


            {isAuthenticated && <span id="span" className="secondaryText"> Welcome <i>{user.name}</i> </span>}
            {isAuthenticated ? (
              <>
              </>
            ) : (
              <>
              </>
            )
            }
            <div className="flexCenter button-container">


              {isAuthenticated ? (
                <button className="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </button>
              ) : (
                <button className="button" onClick={() => loginWithRedirect()}>Log In</button>
              )
              }

              <button className="button" onClick={() => window.open('/registerPage', '_blank')}>
                Register
              </button>
            </div>


          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
