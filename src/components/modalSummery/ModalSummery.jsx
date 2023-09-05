import React from 'react';
import {Modal} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {AiOutlineClose} from 'react-icons/ai';


const ModalSummery = ({open, onClose, cartData, total}) => {
  console.log(cartData)
  return (
    <Modal open={open} onClose={onClose}>
      <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className="modal">
          <div className="header-modal">
            <div>
              <IconButton className='icon-button-modal' onClick={onClose}><AiOutlineClose style={{color: 'gray', fontSize: 18}}/></IconButton>
            </div>
          </div>
          <div>
            <div style={{textAlign: "center"}}>
              <span className='subtitle'>Resúmen del carrito</span>
            </div>
            
            {cartData.length === 0
            ? <div style={{height: '60px', display: "flex", justifyContent: "center", alignItems: "center"}}>
                <span className="semi-bold">El carrito está vacío</span>
              </div>
            : <div style={{width: "100%"}}>
                {cartData.map( item => {

                  return (
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <span>{item.quantity} {item.name}</span>
                      <span className="semi-bold">$ {item.unitPrice*item.quantity}</span>
                    </div>
                  )
                })}
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <span>Envío</span>
                  <span className="semi-bold">$ 120</span>
                </div>

                <div style={{height: "1px", backgroundColor: "gray", width: "100%", marginTop: 10, marginBottom: 10}}/>

                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <span>Total</span>
                  <span className="semi-bold">$ {total}</span>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </Modal>
  )
};

export default ModalSummery;