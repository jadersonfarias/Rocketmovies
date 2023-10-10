import { useAuth } from "../../hooks/auth.jsx";
import { useState } from "react";

import { Container, Form, Background } from"./styles.js";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock} from "react-icons/fi";





export function SignIn(){
     const { signIn } = useAuth();// coloca um objeto para desestruturar para poder pegar a function de signin
     const [ email, setEmail ] = useState("")
     const [ password, setPassword ] = useState("")


     function handleSignIn(){
        signIn({ email, password}) 
     
     }

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
                     onChange={e => setEmail(e.target.value)}
                />

                <Input  
                     placeholder="Password"
                     type="password"
                     icon={FiLock} 
                     onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/>

                <Link to="/register" > criar conta </Link>
           </Form>

           <Background/>
           
        </Container>
    )
}