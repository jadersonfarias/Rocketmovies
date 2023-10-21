import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import moment from "moment-timezone";


import { Container, Content, Title_stars } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Return } from "../../components/Return"
import { Tag } from "../../components/Tag";


import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiTime } from "react-icons/bi"

import { Stars } from "../../components/Stars";



export function Details(){
    const { user } = useAuth()
    const [data, setData] = useState({});
    const params = useParams();
    const navigate = useNavigate()

    const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

    
  const formattedDate = moment
  .utc(data.updated_at)
  .tz("America/Sao_Paulo")
  .format("DD/MM/YYYY HH:mm:ss");

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);
  
  function handleBack(){
    navigate("/")
  }

    return(
    <Container>
      <Header>
               <Input 
                placeholder="Pesquisar pelo título"
                />
      </Header>
   
      <main>
      <Content>
            <Return  onClick={handleBack} icon={AiOutlineArrowLeft} title="voltar"/>

            <Title_stars>
            <h1>{data.title}</h1>
            <Stars/>
            </Title_stars>

            

            <div>
                <img src={avatarURL} alt={user.name} />
                <p>Por {user.name}</p>
                <BiTime/>
                <span>{formattedDate}</span>
            </div>
        { data.tags && (
          <section>
                {data.tags.map((tag) => (
                    <Tag key={String(tag.id)} title={tag.name} />
                ))}
          </section>
        )

                }
            <p>{data.description}</p>

           
           
      </Content>
        </main>


      
    </Container>

    )
}