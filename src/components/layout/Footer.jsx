import React from "react";
import {AiFillCopyrightCircle} from 'react-icons/ai';
import {MdFastfood, MdBorderColor} from 'react-icons/md';


const Footer = () => {

  return (
    <footer className='container-footer'>
      <div style={{width: '33.33%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <span>DeliveryEats</span>
        <MdFastfood style={{fontSize: 30, marginTop: 5}}/>
      </div>
      <div style={{width: '33.33%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <span>Haz tu pedido de comida online</span>
        <MdBorderColor style={{fontSize: 30, marginTop: 5}}/>
      </div>
      <div style={{width: '33.33%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <span>Todos los derechos reservados</span>
        <AiFillCopyrightCircle  style={{fontSize: 30, marginTop: 5}}/>
      </div>
    </footer>
  )
};

export default Footer;