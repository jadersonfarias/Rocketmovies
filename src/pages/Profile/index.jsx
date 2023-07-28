
import { Container, Form, Avatar } from "./styles";
import { Return } from "../../components/Return"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Profile(){
        return(
            <Container>
                <header>
                    <Return to="/" icon={AiOutlineArrowLeft} title="voltar"/>
                </header>

                <Form>
                    <Avatar>
                    <img 
                    src="https://github.com/jadersonfarias.png" 
                    alt="foto do usuário" /> 

                    
                    <label htmlFor="Avatar">
                        <FiCamera/>
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label> 
                    </Avatar>
                    <Input
                    placeholder="nome"
                    type="text"
                    icon={FiUser} 
                    />

                    <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail} 
                    />

                   <Input
                    placeholder="senha atual"
                    type="password"
                    icon={FiLock} 
                    />

                   <Input
                    placeholder="nova senha"
                    type="password"
                    icon={FiLock} 
                    />

                    <Button title="Salvar"/>

                </Form>

            </Container>
        );
}