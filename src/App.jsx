import './styles/App.css';
import './styles/Typography.css';
import MainLayout from './components/layout/MainLayout.jsx';
import FormOrder from './components/homeUser/HomeUser';


// GUADA: CREA TUS ELEMENTOS DENTRO DE PAYWAY, IMPORTALOS DENTRO DE APP Y ESCRIBILOS DENTRO DEL DIV QUE YA ESTA ESCRITO EN EL MAIN LAYOUT
// MATI: CREA TUS ELEMENTOS DENTRO DE CART Y SEGUI LOS MISMOS PASOS QUE GUADA ARRIBA
// CUALQUIER CONSULTA MANDENME UN MENSAJE POR WSP
function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <MainLayout>
        <div style={{ backgroundColor: 'white', color: 'black', width: '60%', height: '100%', borderRadius: 15, padding: 20, flexGrow: 1, boxShadow: '5px 5px 50px black', display: 'flex' }}>
          <FormOrder />
        </div>
      </MainLayout>
    </div>
  );
}

export default App;