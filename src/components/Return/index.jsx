import { Container,  } from "./styles";


export  function Return({title,icon: Icon,  ...rest}){
    return(
        <Container
        type="button"
        {...rest}>
            {Icon && <Icon size={15}/>}
            {title}
        </Container>
    )
}