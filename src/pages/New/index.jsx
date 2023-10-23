import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { Container, Form, Buttons } from "./styles";

import { Return } from "../../components/Return"; 

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
            return alert("Você esqueceu de dar uma nota para o filme")
        }

        const isRatingValid = rating >= 0 && rating <= 5;
        
        if(!isRatingValid){
            return alert("A nota do filme deve ser entre 0 e 5")
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

    function handleBack(){
        navigate("/")
    }
    
        // function handleDelete(){
        //    document.getElementById("new-title").value = ""
        //    document.getElementById("new-rating").value = ""
        //    document.getElementById("new-description").value = ""
        //    document.getElementById("new-tag").value = []
        // }

        function handleDelete(){
           setNewTag("")
           document.getElementById("new-description").value = ""
           setRating("")
           setTitle("")
           setTags([])
         }
    
    return(
        <Container>
            <Header>
            <Input 
                placeholder="Pesquisar pelo título"
                onChange={e => setSearch(e.target.value)}
                />
            </Header>
            <main>
                <Form>
                    <header>
                    <Return  onClick={handleBack} icon={AiOutlineArrowLeft} title="voltar"/>
                        <h1>NOVO FILME</h1>
                        
                    </header>

                    <div>
                        <Input 
                       // id="new-title"
                        value={title}
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                        />

                        <Input 
                       // id="new-rating"
                        value={rating}
                        placeholder="Sua nota (de 0 a 5)"
                        onChange={ e => setRating(e.target.value)}
                       
                        />
                    </div>

                    <Textarea 
                       id="new-description"  
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
                     // id="new-tag"
                      value={newTag}
                      isNew 
                      placeholder="nova tag"
                      onChange={(e) => setNewTag(e.target.value)}
o
                      onClick={handleAddTag}
                      />

                    </div> 
                    </Section>
                    <Buttons>
                        <Button 
                        onClick={handleDelete}
                        className="delete" 
                        title="Excluir filme"
                        />
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