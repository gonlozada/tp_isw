import React from "react";
import {IconButton} from '@material-ui/core';
import {FaShoppingCart} from 'react-icons/fa';
import FoodImage from '../../comida-basura.webp';
import { openSummary } from "../homeUser/HomeUser";


const Header = () => {

  return (
    <div className='container-header'>
      <img
        src={FoodImage}
        alt=''
        style={{height: '100%'}}
      />

      <h2 className='bold'>Delivery Eats</h2>

      <div style={{marginRight: 20}}>
        <IconButton className='icon-button' onClick={openSummary}><FaShoppingCart style={{color: 'white'}}/></IconButton>
      </div>
    </div>
  )
}

export default Header;