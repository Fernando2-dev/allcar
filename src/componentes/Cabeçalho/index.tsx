import  Style from "./Cabecalho.module.scss"
const Cabecalho = () => {
  
  
  const lista  = [
      [
        "Home",
      ],
      [
        "Empresa"
      ],
      [
        "Estoque"
      ],
      [
        "Cadastro"
      ]
  ]

  

  return(
      <header className={Style.corpo}>
        <img className={Style.imagem} src="../imagem/allcar.png" alt="logo marca"/>
          <ul className={Style.lista}>
            {lista.map((itens,index) => 
              <li className={Style.listaLink} 
                  key={index}>
                  <a href="#" className={Style.listaLink}>{itens} </a>
              </li>)}
          </ul>
      </header>
    )
}

export default Cabecalho