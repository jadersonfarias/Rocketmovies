import { useContext } from "react";
import { MyContext } from "../../myContext.js";

import { Container, Form, Background } from"./styles.js";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock} from "react-icons/fi";





export function SignIn(){
     const data = useContext(MyContext)
     console.log(data)
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

                <Link to="/register" > criar conta </Link>
           </Form>

           <Background/>
           
        </Container>
    )
}