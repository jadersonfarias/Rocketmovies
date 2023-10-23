import { useNavigate } from "react-router-dom"

import { Container, Profile, Title, Search} from "./styles"
import { useAuth } from "../../hooks/auth"
import  avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"

export function Header({children}){
    const { signOut, user } = useAuth()
    const navigate = useNavigate()



    function handleLogOut(){
        navigate("/");
        signOut();
    }
  
    const avatarUrl = user.avatar ?  `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return(
        <Container>
            <Title>
             <h1>rocketmovies</h1>
            </Title>
            
            <Search>{children}</Search>
            
            <Profile to="/profile">
                <div>
                <strong>{user.name}</strong>
                <button onClick={handleLogOut}>Sair</button>
                </div>
                <img src={ avatarUrl }alt={ user.name } />   
            </Profile>


        </Container>
    )
}