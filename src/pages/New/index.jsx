import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { Container, Form, Buttons } from "./styles";

import { Link } from "react-router-dom";

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Textarea } from "../../components/Textarea";

import { Input } from "../../components/Input";

import { Button } from "../../components/Button";

import { Header } from "../../components/Header"

import { Section } from "../../components/Section"

import { NoteItem } from "../../components/NoteItem";

export function New(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    const[tags, setTags] = useState([]);
    const[newTag, setNewTag] = useState("");


    const navigate = useNavigate();

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]); //pega tudo que tinha antes e joga aqui deixa tudo no mesmo nível
        setNewTag(""); // para resetar este estado
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted)) //trás todas a tags menos a deletada
    }

    async function handleNewNote(){
       
        if(!title){
            return alert("adicione um título de um filme")
        }
        
        if(!rating){
            return alert("você esqueceu de colocar uma nota para este filme")
        }

        if(newTag){
            return alert("você deixou uma tag no campo para adicionar, mas não clicou em adicionar")
        }


        await api.post("/notes", {
            title,
            description,
            tags,
            rating,
        })

        alert("Nota criada com sucesso!")
        navigate("/")
    }

    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <Link to="/"><AiOutlineArrowLeft/> Voltar</Link>
                        <h1>NOVO FILME</h1>
                    </header>

                    <div>
                        <Input 
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                        placeholder="Sua nota (de 0 a 5)"
                        onChange={ e => setRating(e.target.value)}
                       
                        />
                    </div>

                    <Textarea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Marcadores">
                    <div className="tags">
                     {  
                        tags.map((tag, index) => (
                            <NoteItem 
                                key={String(index)}
                                value={tag}
                                onClick={() => handleRemoveTag(tag)} //passa para a função 
                            />

                        ))

                     }
            
                      <NoteItem 
                      isNew 
                      placeholder="nova tag"
                      onChange={(e) => setNewTag(e.target.value)}
                      value={newTag}
                      onClick={handleAddTag}
                      />

                    </div> 
                    </Section>
                    <Buttons>
                        <Button className="delete" title="Excluir filme"/>
                        <Button  
                         title="Salvar alterações"
                         onClick={handleNewNote}
                        />

                    </Buttons>
                    
                </Form>
            </main>
        </Container>
    )
}