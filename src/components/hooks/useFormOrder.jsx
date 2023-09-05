import {useState} from 'react';
import data from '../../json/cart.json';


const useFormOrder = () => {
  const [modal, setModal] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [success, setSuccess] = useState(false);
  const [payType, setPayType] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const [nameOwner, setNameOwner] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [typeDeliver, setTypeDeliver] = useState('Lo antes posible');
  const [dateDeliver, setDateDeliver] = useState('');
  const [city, setCity] = useState(1);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [reference, setReference] = useState('');
  const [ammountPay, setAmmountPay] = useState('');
  const [error, setError] = useState({value: false, msg: ''});


  const actions = {
    changePayType: (value) => {
      setLoading(true);

      setTimeout( () => {
        setPayType(value);
        setLoading(false);
      }, 2000);
    },
    changeCardNumber: (value) => {
      setCardNumber(value);
    },
    changeCvc: (value) => {
      setCvc(value);
    },
    changeNameOwner: (value) => {
      setNameOwner(value);
    },
    changeExpireDate: (value) => {
      setExpireDate(value);
    },
    changeTypeDeliver: (value) => {
      setTypeDeliver(value);
    },
    changeDateDeliver: (value) => {
      setDateDeliver(value);
    },
    changeCity: (value) => {
      setCity(value);
    },
    changeAddress: (value) => {
      setAddress(value);
    },
    changeNumber: (value) => {
      setNumber(value);
    },
    changeReference: (value) => {
      setReference(value);
    },
    changeAmmountPay: (value) => {
      setAmmountPay(value);
    },
    getCartData: () => {
      setCartData(data.products);
      let total = 0;

      data.products.forEach( (product) => {
        total += product.unitPrice*product.quantity;
      });

      total += 120;

      setTotalCart(total);
    },
    buyCart: () => {
      setLoadingButton(true);
      if (address === '' || number === '' || city === 1) {
        setError({value: true, msg: 'Ingrese los datos obligatorios de la dirección'});
        setLoadingButton(false);
        setSuccess(false);
        return;
      }

      if(data.products.length === 0) {
        setError({value: true, msg: 'No existen productos en el carrito'});
        setLoadingButton(false);
        setSuccess(false);
        return;
        
      }

      if(payType === '') {
        setError({value: true, msg: 'Seleccione un método de pago'});
        setLoadingButton(false);
        setSuccess(false);
        return;
      }

      if (payType === 'efectivo') {
        if (ammountPay === '' || parseInt(ammountPay) < totalCart) {
          setError({value: true, msg: 'Ingrese un monto válido'});
          setLoadingButton(false);
          setSuccess(false);
          return;
        }
      } else {
        if (cardNumber.length < 16 || cardNumber[0] !== '4') {
          setError({value: true, msg: 'Ingrese una tarjeta válida'});
          setLoadingButton(false);
          setSuccess(false);
          return;
        }

        if(expireDate === '') {
          setError({value: true, msg: 'Ingrese la fecha de vencimiento'});
          setLoadingButton(false);
          setSuccess(false);
          return;
        }

        const [year, month] = expireDate.split('-');
        
        if (parseInt(year) < 2023) {
          setError({value: true, msg: 'Ingrese una fecha de vencimiento correcta'});
          setLoadingButton(false);
          setSuccess(false);
          return;
        }

        if(parseInt(month) < 5) {
          setError({value: true, msg: 'Ingrese una fecha de vencimiento correcta'});
          setLoadingButton(false);
          setSuccess(false);
          return;
        }

        if(nameOwner === ''){
          setError({value: true, msg: 'Ingrese el nombre del propietario'});
          setLoadingButton(false);
          setSuccess(false);
          return;
        }

        if (cvc === '' || cvc.length < 3) {
          setError({value: true, msg: 'Ingrese su código de verificación'});
          setLoadingButton(false);
          setSuccess(false);
          return;
        }
      }

      if(typeDeliver === 'Indicar fecha y hora' && (Date.now() > Date.parse(dateDeliver) || dateDeliver === '')) {
        setError({value: true, msg: 'Ingrese una fecha de entrega válida'});
        setLoadingButton(false);
        setSuccess(false);
        return;
      }

      setError({value: false, msg: ''});
      setTimeout( () => {
        setLoadingButton(false);
        setSuccess(true);
      }, 1500);
    },
    updateModalStatus: (value) => {
      setModal(value);
    }
  }

  const system = {payType, loading, cardNumber, cvc, nameOwner, expireDate, typeDeliver, dateDeliver, city, address, number, reference, ammountPay, error, loadingButton, totalCart, success, modal, cartData};

  return {actions, system};
}

export default useFormOrder;