import Cabecalho from '../componentes/Cabeçalho';
import CampoCarros from '../componentes/CampoCarros';
import CampoQualidade from '../componentes/CampoQualidade';
import CampoRodape from '../componentes/CampoRodape';
import CampoTexto from '../componentes/CampoTexto';

import './page.css'

function App() {
  return (
 <div className="main">
    <Cabecalho/>
    <CampoTexto/>
    <CampoCarros/>
    <CampoQualidade texto="VENDAS REALIZADAS"/>
    <CampoRodape/>
  </div>

  );
}

export default App;
