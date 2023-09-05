import React, {useEffect, useImperativeHandle} from "react";
import SelectPayWay from "../payWay/SelectPayWay";
import DateReception from "../dateReception/DateReception";
import useFormOrder from "../hooks/useFormOrder";
import Button from "../Button";
import ModalSummery from "../modalSummery/ModalSummery";

export const openSummary = () => localRef.current?.openSummary();
const localRef = React.createRef();

const FormOrder = () => {
  const {actions, system} = useFormOrder();

  const handleChange = (event) => {
    actions.changeCity(event.target.value);
  };

  useEffect( () => {
    actions.getCartData();
  }, []) //eslint-disable-line


  useImperativeHandle(localRef, () => ({
		openSummary: () => actions.updateModalStatus(true),
	}));


  return (
    <div style={{width: "100%", border: "solid 1px gray", padding: "10px 10px", display: "flex", flexDirection: "column", textAlign: "center", boxSizing: "border-box", borderRadius: 15, flexGrow: 1,}}>
      <ModalSummery open={system.modal} onClose={() => actions.updateModalStatus(false)} cartData={system.cartData} total={system.totalCart}/>
      <span className="title">Dirección</span>
      <div style={{textAlign: "start", marginBottom: 15}}>
        <span className="subtitle">Ingrese los datos solicitados (los campos * son obligatorios):</span>
      </div>

      <div style={{width: "100%", display: "flex", marginBottom: 10}}>
        <div style={{width: "50%"}}>
          <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <span>*Calle:&nbsp;&nbsp;&nbsp;</span>
            <input className="input" value={system.address} onChange={e => actions.changeAddress(e.target.value)} />
          </div>
        </div>

        <div style={{width: "50%"}}>
          <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <span>*Número:&nbsp;&nbsp;&nbsp;</span>
            <input className="input" type="number" value={system.number} onChange={e => actions.changeNumber(e.target.value)} />
          </div>
        </div>
      </div>
      
      <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 10}}>
        <div style={{width: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <span>*Ciudad:&nbsp;&nbsp;&nbsp;</span>
          <select className="input" onChange={handleChange}>
            <option selected disabled>Seleccione su ciudad</option>
            <option value={2}>Córdoba</option>
            <option value={3}>Villa Allende</option>
          </select>
        </div>

        <div style={{width: "50%"}}>
          <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <span>Referencia:&nbsp;&nbsp;&nbsp;</span>
            <input className="input" value={system.reference} onChange={e => actions.changeReference(e.target.value)} />
          </div>
        </div>
      </div>

      <span className="title">Método de pago</span>
      <div style={{textAlign: "start", marginBottom: 5}}>
        <SelectPayWay actions={actions} system={system} />
      </div>

      <span className="title">Fecha de recepción</span>
      <div style={{textAlign: "start", marginBottom: 5}}>
        <DateReception actions={actions} system={system} />
      </div>

      {system.error.value && 
        <div className="error">
          {system.error.msg}
        </div>
      }

      {system.success && 
        <div className="success">
          Pedido realizado correctamente
        </div>
      }
    
      <div style={{display: "flex", justifyContent: "space-between", flexGrow: 1, alignItems: "flex-end"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <span><span className="semi-bold">Total:</span> $ {system.totalCart}</span>
        </div>

        <Button onClick={() => actions.updateModalStatus(true)}>
          Mostrar resúmen
        </Button>
        
        <Button onClick={() => actions.buyCart()} loading={system.loadingButton}>
          Realizar pedido
        </Button>
      </div>
    </div>
  )
}

export default FormOrder;