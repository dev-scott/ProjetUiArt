import React, { useEffect, useRef, useState } from "react";

import Logo from "../assets/Brand/Logo.png";
import { FaBars } from "react-icons/fa";
import { links, Connextion_btn } from "../Data/dataLink";
const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkRef = useRef(null);
  const linkContainRef = useRef(null);
  const toggleRef = useRef(null);

  const ToggleLink = () => {
    setShowLinks(!showLinks);
  };

  useEffect(
    () => {
      const linksHeight = linkRef.current.getBoundingClientRect().height;

      if (showLinks) {
        linkContainRef.current.style.height = `${linksHeight + 10}px`;
        toggleRef.current.style.transform = "rotate(180deg)";

        console.log("taille max");
      } else {
        linkContainRef.current.style.height = "0px";
        console.log("taille min");
        toggleRef.current.style.transform = "rotate(0deg)";
      }
    },
    [showLinks]
  );

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} alt="" className="LogoPrimary" />
          <button className="nav-toggle" onClick={ToggleLink} ref={toggleRef}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linkContainRef}>
          <ul className="links" ref={linkRef}>
            {links.map(link => {
              const { id, url, text } = link;

              return (
                <li key={id}>
                  <a href={url}>
                    {" "}{text}
                  </a>
                </li>
              );
            })}
            {setShowLinks && (
<>
{Connextion_btn.map(btn => {
    const { id, url, text } = btn;

    return (
      <li key={id}>
        <button>
          <a href={url}>
            {text}
          </a>
        </button>
      </li>
    );
  })}

</>
            )}

  


          </ul>
        </div>

        <ul className="connexion-container">
          {Connextion_btn.map(btn => {
            const { id, url, text } = btn;

            return (
              <li key={id}>
                <button>
                  <a href={url}>
                    {text}
                  </a>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
