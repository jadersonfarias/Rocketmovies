import { Container, Profile, Title, Pesquisa  } from "./styles"
import { useAuth } from "../../hooks/auth"

export function Header(){
    const { signOut } = useAuth()
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
                <strong>Jaderson farias</strong>
                <button onClick={signOut}>Sair</button>
                </div>
                <img src="https://github.com/jadersonfarias.png" alt="foto do usuário" />
                
            </Profile>


        </Container>
    )
}