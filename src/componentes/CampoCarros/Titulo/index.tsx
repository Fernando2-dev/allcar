import  Style  from "./Titulo.module.scss"
const Titulo = (props : {texto:string}) => {
  return(
    <div>
        <h1 className={Style.texto}>{props.texto}</h1>
    </div>
  )
} 
export default Titulo