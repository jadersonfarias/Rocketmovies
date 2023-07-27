import { Container, Profile, Title, Pesquisa  } from "./styles"

export function Header(){
    return(
        <Container>
            <Title>
             <h1>rocketmovies</h1>
            </Title>
            <Pesquisa>

            <input placeholder="Pesquisar pelo título"/>
            </Pesquisa>
            
            <Profile>
                <div>
                <strong>Jaderson farias</strong>
                <button>Sair</button>
                </div>
                <img src="https://github.com/jadersonfarias.png" alt="foto do usuário" />
                
            </Profile>


        </Container>
    )
}