import React from "react";
import {ScaleLoader} from "react-spinners";


function SelectPayWay({actions, system}) {
  const handleChange = (e) => {
   actions.changePayType(e.target.value);
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <span className="subtitle" style={{marginBottom: 5}}>Seleccione el método de pago a utilizar</span>

      <select className="input" style={{width: "20%"}} onChange={handleChange}>
        <option disabled selected>Seleccione la opción</option>
        <option value="efectivo">Efectivo</option>
        <option value="tarjeta">Tarjeta débito/crédito</option>
      </select>

      {system.loading
      ? <div style={{width: "100%", height: 150, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <ScaleLoader height={50} width={5} color={"red"}/>
          <span>Cargando...</span>
        </div>
      : <>
          {system.payType === "efectivo" &&
            <div>
              <div className="imageEfectivo"><img src={require("../../efectivo.png")} alt="efectivo" style={{ height: "100%" }} /></div>
              <div className="container-efectivo" style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <span style={{marginBottom: 5}}>
                  Ingrese el monto con el que abona:
                </span>

                <input className="input" style={{width: "20%"}} type= "number" onChange={e => actions.changeAmmountPay(e.target.value)} value={system.ammountPay} />
              </div>
            </div>
          }

          {system.payType === "tarjeta" &&
            <div style={{width: "100%"}}>
              <div className="imageCreditCard"><img src={require("../../card.jpeg")} alt="creditCard" style={{ height: "100%" }} /></div>

              <form style={{width: "100%"}}>
                <div style={{marginBottom: 5}}>
                  <span className="subtitle">Ingrese sus datos:</span>
                </div>

                <div className="container-creditCard">
                  <div style={{ display: "flex", flexDirection: "column", width: "50%", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 5 }}>
                      <span>
                        Número de la tarjeta:&nbsp;&nbsp;
                      </span>
                      <input 
                        type="number" 
                        name="creditCardNumber" 
                        className="input" 
                        value={system.cardNumber}
                        onChange={e => {
                          if(e.target.value.length > 16) {
                            return;
                          }

                          actions.changeCardNumber(e.target.value);
                        }}
                      />
                    </div>

                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                      <span>
                        Nombre y apellido del titular:&nbsp;&nbsp;
                      </span>
                      <input 
                        type="text" 
                        name="name" 
                        className="input" 
                        onChange={e => actions.changeNameOwner(e.target.value)}
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", width: "50%", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 5 }}>
                      <span>
                        Fecha de vencimiento:&nbsp;&nbsp;
                      </span>
                      <input 
                        type="month" 
                        name="creditCardDate" 
                        className="input" 
                        style={{width: "30%"}} 
                        onChange={e => actions.changeExpireDate(e.target.value)}
                      />
                    </div>

                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                      <span>
                        CVC:&nbsp;&nbsp;
                      </span>
                      <input 
                        type="number" 
                        name="creditCardCVC" 
                        className="input" 
                        style={{width: "20%"}}
                        value={system.cvc}
                        onChange={e => {
                          if(e.target.value.length > 3) {
                            return;
                          }

                          actions.changeCvc(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          }
        </>
      }
    </div >
  )
}


export default SelectPayWay;