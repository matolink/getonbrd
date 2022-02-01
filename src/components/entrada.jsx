const Entrada = (props) => {
    return <div>
        <h1><a href={props.url}>{props.titulo} </a>, 
        salario {props.salariomin ? props.salariomin : ' no tengo minimo'}, 
        salario max {props.salariomax ? props.salariomax : 'no tengo maximo'}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.descripcion }} />
    </div>
}
export default Entrada