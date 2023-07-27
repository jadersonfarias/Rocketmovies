import { Container, Content, Button_add } from "./styles";

import { FiPlus } from "react-icons/fi"

import { Section } from "../../components/Section"

import { Header } from "../../components/Header";

import { Note } from "../../components/Note";

export function Home(){
    return(
        <Container>
            <Header/>
            <main>
                <Content>
                    <header>
                    <h1>Meus filmes</h1>
                    <Button_add>
                    <FiPlus/> Adicionar filme
                    </Button_add>
                    </header>
                    <Section>
                    <Note data={{ title: 'Interestelar', 
                    text:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                    tags: [
                        {id: '1', name: 'interestelar'},
                        {id: '2', name: 'rocketseat'},
                        {id: '3', name: 'rocketseat'},
                    ]
                    }}/>
                    
                    <Note data={{ title: 'Interestelar', 
                    text:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                    tags: [
                        {id: '1', name: 'interestelar'},
                        {id: '2', name: 'rocketseat'},
                        {id: '3', name: 'rocketseat'},
                    ]
                    }}/>

                

                    <Note data={{ title: 'Interestelar', 
                    text:'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
                    tags: [
                        {id: '1', name: 'ficção cientifica'},
                        {id: '2', name: 'drama'},
                        {id: '3', name: 'família'},
                    ]
                    }}/>
     
                    </Section>
                   
                </Content>
            </main>
        </Container>        
    )
}