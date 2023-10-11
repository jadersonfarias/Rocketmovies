import { Container, Profile, Title, Pesquisa  } from "./styles"
import { useAuth } from "../../hooks/auth"
import  avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"

export function Header(){
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ?  `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return(
        <Container>
            <Title>
             <h1>rocketmovies</h1>
            </Title>
            <Pesquisa>

            <input placeholder="Pesquisar pelo título"/>
            </Pesquisa>
            
            <Profile to="/profile">
                <div>
                <strong>{user.name}</strong>
                <button onClick={signOut}>Sair</button>
                </div>
                <img src={ avatarUrl }alt={ user.name } />
                
            </Profile>


        </Container>
    )
}