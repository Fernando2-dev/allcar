 import  Style  from "./CampoQualidade.module.scss";

 const CampoQualidade = (props :{texto: string}) => {
    return(
        <>
        <h1 className={Style.titulo}>{props.texto}</h1>
        <div className={Style.main}>
            <p className={Style.paragrafo}>A nossa empresa se preocupa muito com a satisfaçao dos nossos clientes e buscamos sempre dá o melhor suporte e apoio para terem a melhor experiência com  a nossa loja... a Allcar sempre nas primeiras em relação a qualidade, desempenho, segurança, conforto e satisfação</p>
            <img src="../imagem/carro5.png" alt=""  className={Style.carro}/>
        </div>
        </>
    )
 }

 export default CampoQualidade;