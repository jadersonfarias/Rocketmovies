
import { api } from "../../services/api";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import  avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Container, Form, Avatar } from "./styles";
import { Return } from "../../components/Return"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Profile(){
    //atualização dos dados do usuário
   const { user, updateProfile } = useAuth();

   const [ name, setName ] = useState(user.name);
   const[ email,setEmail ]=useState(user.email);
   const[passwordOld, setPasswordOld]=useState();
   const[passwordNew, setPasswordNew]=useState();

   const avatarUrl = user.avatar ?  `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder //caso não tenha img pega uma padrão
   const [ avatar, setAvatar ] = useState(avatarUrl);
   const [ avatarFile, setAvatarFile ] = useState(null);

//função que passa os dados para a função updateProfile
  async function handleUpdate() {
    const user ={
        name,
        email,
        password: passwordNew,
        old_password: passwordOld,
    }

    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)

  }

        return(
            <Container>
                <header>
                    <Return to="/" icon={AiOutlineArrowLeft} title="voltar"/>
                </header>

                <Form>
                    <Avatar>
                    <img 
                    src={avatar}
                    alt="foto do usuário" /> 

                    
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label> 
                    </Avatar>
                    <Input
                    placeholder="nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={ e => setName(e.target.value)}
                    />

                    <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                    />

                   <Input
                    placeholder="senha atual"
                    type="password"
                    icon={FiLock} 
                    onChange={ e => setPasswordOld(e.target.value)}
                    />

                   <Input
                    placeholder="nova senha"
                    type="password"
                    icon={FiLock} 
                    onChange={ e => setPasswordNew(e.target.value)}
                    />

                    <Button title="Salvar" onClick={handleUpdate}/>

                </Form>

            </Container>
        );
}