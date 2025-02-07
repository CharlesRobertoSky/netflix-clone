import React from "react";
import './main.css'

export default ({black}) => {
  return (
    <header  className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-marcas.com%2Fwp-content%2Fuploads%2F2020%2F04%2FNetflix-Logo.png&f=1&nofb=1&ipt=503581812ecb4ecc727737e4661591505fb5fc2db6df4f6d0642539545b32ee6&ipo=images" alt="netflix logo"/>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fnetflix-profile-pictures-5yup5hd2i60x7ew3.jpg&f=1&nofb=1&ipt=0b0b1f15f4927333c24c65a189e9e1095157ea227618df092386f8d4b7a9990e&ipo=images" alt="Usuário"/>
        </a>
      </div>
    </header>
  )
    
  
}