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
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>

                    <Textarea placeholder="Observações"/>

                    <Section title="Marcadores">
                    <div className="tags">
                      <NoteItem isNew placeholder="nova tag"/>
                      <NoteItem value="terror"/>
                    </div> 
                    </Section>
                    <Buttons>
                        <Button className="delete" title="Excluir filme"/>
                        <Button  title="Salvar alterações"/>

                    </Buttons>
                    
                </Form>
            </main>
        </Container>
    )
}