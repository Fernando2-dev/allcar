import  Style  from "./CampoTexto.module.scss"
   

 
 const CampoTexto = () => {
  const texto = [
     ['Com foco no mercado digital e trazendo segurança, transparência e rapidez, o propósito da All Car é ser a melhor escolha em automóveis para seus clientes e fazer parte dos momentos especiais da sua vida. Maravilha, né?!'],
     ['Afinal, embora rapidez faça parte do DNA da All Car, ágil em todas as etapas legais da compra/venda do seu veículo, aqui valorizamos as boas experiências.'],
     ['Siga nosso perfil. Acompanhe todas as atualizações. E não perca nenhum conteúdo. @allcarconsultoriapa mais do que carros, uma experiência premium 💎']
    ]


    return(
      <div className={Style.corpo}>
        <img src="../imagem/carro4.jpg" alt="Carro" className={Style.Carro} />
        <ul className={Style.lista}>
        {texto.map((text, index) => <p className={Style.paragrafo} key={index}>{text}</p> )}
        </ul>
        
      </div>
    
    )
 } 
 export default CampoTexto 