import { useState } from "react";
import { api } from "../../services/api.js";

import { Container, Form, Background } from"./styles.js";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {FiUser, FiMail, FiLock} from "react-icons/fi";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";



export function SignUp(){
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const navigate = useNavigate();

     function handleSignUp(){
       if(!name || !email || !password){ //se um dos dados não estiver sido colocado entra aki
         return alert("preencha todos os campos!");
        
       }

       api.post("/users", {name, email, password}) //está jogando os dados para banco
       .then(() => { //executa caso tenha dado certo
          alert("usuário cadastrado com sucesso!");
          navigate("/");
       })
       .catch(error => { // captura o error 
          if(error.response){ //se for um error que foi cadastrado no bando mostra aki
               alert(error.response.data.message);
          }else{ //genérico
               alert("Não foi possível cadastrar")
          }
       });
     }

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
                     onChange={e => setName(e.target.value)}
                />

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

                <Button title="Cadastrar" onClick={handleSignUp}/>

                <Link to="/"> <AiOutlineArrowLeft/> voltar para o login</Link>
           </Form>
           <Background/>

        </Container>
    )
}