import React, { useEffect, useRef, useState } from "react";
import {Link,NavLink } from "react-router-dom";
import Logo from "../assets/Brand/Logo.png";
import { FaBars } from "react-icons/fa";
import { links, Connextion_btn } from "../Data/dataLink";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import France from "../assets/Brand/france.png";
import Espagne from "../assets/Brand/espagne.png";
import Etat_unis from "../assets/Brand/etats-unis.png";



const NavBar = () => {

	const { i18n, t } = useTranslation(["common"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);


 
      const [language, setLanguage] = React.useState('');

      const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
		i18n.changeLanguage(event.target.value);

      };


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
                  <NavLink to = {url} className ={({isActive})=>(isActive?'active_link':'')} >
                    {t(text)}
                  </NavLink>
                </li>
              );
            })}

{/* <FormControl sx={{ m: 1, minWidth: 90 }} size="small">
<InputLabel id="demo-simple-select-disabled-label"><LanguageIcon/></InputLabel>

      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={language}
        label="Age"
        onChange={handleLanguageChange}
        style={{border:'none',background:'none',outline:'none'}}
      >
      
        <MenuItem value="en">En</MenuItem>
        <MenuItem value="fr">Fr</MenuItem>
        <MenuItem value="es">Es</MenuItem>
      </Select>
      
    </FormControl>
 */}

    {/* <Box  className="cutom_option" sx={{ minWidth: 50}}>
      <FormControl fullWidth >
       
        <NativeSelect
          defaultValue="en"
          value={language}
          className="cutom_option"
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange={handleLanguageChange}
          

        >
          <option value="en" className="cutom_option select_inside " >En    </option>
          <option value="fr" className="cutom_option select_inside " >Fr    </option>
          <option value="es" className="cutom_option select_inside " >Es    </option>
        </NativeSelect>
      </FormControl>
    </Box> */}


<FormControl  className="leave_all" variant="standard" sx={{  minWidth: 70 , paddingLeft:"10px" }}>
        <Select  sx={{  color:"white",border:"none",outline:"none"}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          defaultValue="en"
          value={language}
          label="Age"

          onChange={handleLanguageChange}
        >
        
          <MenuItem value="en"><img src={Etat_unis} alt="" style={{width:"20px"}} /></MenuItem>
          <MenuItem value="fr"><img src={France} alt="" style={{width:"20px"}} /></MenuItem>
          <MenuItem value="es"><img src={Espagne} alt="" style={{width:"20px"}} /></MenuItem>
        </Select>
      </FormControl>


             {/* <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
             <LanguageIcon/> <ArrowDropDownIcon/>
          </Button>
          <Menu {...bindMenu(popupState)} value ={localStorage.getItem("i8nextLng")}>
            <MenuItem onClick={popupState.close} value = "fr"  onChange ={handleLanguageChangeFr}  >Fr</MenuItem>
            <MenuItem  value="en"  onClick ={handleLanguageChangeEn}>En</MenuItem>
            <MenuItem onClick={popupState.close} value="es"  onChange ={handleLanguageChangeEs} >Es</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState> */}

{/* <li className="nav-item">
						<select
							className="nav-link bg-dark border-0 ml-1 mr-2"
							value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}
						>
							<option value="en">English</option>
							<option value="fr">Français</option>
							<option value="es">Español</option>
						</select>
					</li> */}


            {setShowLinks && (
<>
{Connextion_btn.map(btn => {
    const { id, url, text } = btn;

    return (
      <li key={id}>
        <button>
          <Link to={url}>
            {t(text)}
          </Link>
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
                  <Link to={url}>
                   { t(text)}
                  </Link>
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
