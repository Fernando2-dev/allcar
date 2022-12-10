import Style from './CampoRodape.module.scss'
import Maps from './Maps/Maps';

const CampoRodape = () => {
    
    return (
        
     <footer className={Style.footer}>
        <div className={Style.caixa}>
            <h4 className={Style.titulo}>
            ACOMPANHE A ALLCAR MOTORES :
            </h4>
            <ul className={Style.lista}>
                <li className={Style.listalink}>
                    <a href="https://www.instagram.com/allcarconsultoriapa/" className={Style.listalink}>
                        <img src="./imagem/instagram.png" alt="Instagram" className={Style.icone1}/>
                    </a>
                </li>
                <li className={Style.listalink}>
                    <a href="https://wa.me/message/RQIE5KJXUSRPO1" className={Style.listalink}>
                        <img src="./imagem/whatsapp.png" alt="whatsapp" className={Style.icone2} />
                    </a>
                </li>
            </ul>
      </div>
             <div className={Style.caixa2}>
                    <ul className={Style.lista2}>
                        <li  className={Style.listalink2}>
                            <h5  className={Style.titulo2}>Endereço</h5>
                            <p  className={Style.descricao}>Av.Dona Renata (Av.Marginal, 2940)</p>
                            <p  className={Style.descricao}>Centro-Araras-SP-CEP:123604-0000</p>
                        </li>
                        <li  className={Style.listalink2} >
                            <h5  className={Style.titulo2}>Telefone</h5>
                            <p  className={Style.descricao}>(91) 9 92057823</p>
                        </li>
                        <li  className={Style.listalink2}>
                            <h5  className={Style.titulo2}>E-mail</h5>
                            <p  className={Style.descricao1}>contato@paitomotors.com.br</p>
                        </li>
                    </ul>
                
            </div>
       
        <Maps/>
     </footer>
    )
} 
export default CampoRodape;