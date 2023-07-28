import { Container, Form, Background } from"./styles.js";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {FiUser, FiMail, FiLock} from "react-icons/fi";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from "react-router-dom";



export function SignUp(){
    return(
        <Container>
            
              <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                
                <Input  
                     placeholder="Nome"
                     type="text"
                     icon={FiUser} 
                />

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

                <Button title="Cadastrar"/>

                <Link to="/"> <AiOutlineArrowLeft/> voltar para o login</Link>
           </Form>
           <Background/>

        </Container>
    )
}