import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input"

import { Container, Content, Button_add } from "./styles";

import { FiPlus } from "react-icons/fi"

import { Section } from "../../components/Section"

import { Header } from "../../components/Header";

import { Note } from "../../components/Note";
import { api } from "../../services/api";

export function Home(){
    const [ notes, setNotes ] = useState([]);
    const [ search, setSearch] = useState("")

    const navigate = useNavigate();

function handleDetails(id) {
    navigate(`/Details/${id}`);
  }

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}`)
            setNotes(response.data);
        }

        fetchNotes()
    }, [search]);

    return(
        <Container>
            <Header>
                <Input 
                placeholder="Pesquisar pelo título"
                onChange={e => setSearch(e.target.value)}
                />
            </Header>
            
            <main>
                <Content>
                    <header>
                    <h1>Meus filmes</h1>
                    <Button_add to="/new">
                    <FiPlus/> Adicionar filme
                    </Button_add>
                    </header>

                    <Section>
                    {
                      notes.map(note => (
                        <Note
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note.id)}
                        />
                        ))
                    }
                    
                    </Section>
                   
                </Content>
            </main>
        </Container>        
    )
}