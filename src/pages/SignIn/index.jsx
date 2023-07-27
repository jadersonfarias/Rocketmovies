import { Container, Form, Background } from"./styles.js";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock} from "react-icons/fi";
import { AiOutlineArrowLeft } from 'react-icons/ai';


export function SignIn(){
    return(
        <Container>
           <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>


                <Input  
                     placeholder="E-mail"
                     type="text"
                     icon={FiMail} 
                />

                <Input  
                     placeholder="Password"
                     type="password"
                     icon={FiLock} 
                />

                <Button title="Entrar"/>

                <span> <AiOutlineArrowLeft/> criar conta</span>
           </Form>

           <Background/>
           
        </Container>
    )
}