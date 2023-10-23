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
import { Button } from "../../components/Button"


import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiTime } from "react-icons/bi"

import { Rating } from "../../components/Rating";



export function Details(){
    const { user } = useAuth()
    const [data, setData] = useState({});
    const params = useParams();
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);

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

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o filme?");

    if (confirm) {
      setLoading(true);

      try {
        await api.delete(`/notes/${params.id}`);
        navigate(-1);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível remover o filme.");
          console.log("Erro ao remover o filme:", error);
        }
      } finally {
        setLoading(false);
      }
    }

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
            <Rating grade={data.rating} isBigSize/>
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

            <Button 
                title="Excluir Filme"
                loading={loading}
                onClick={handleRemove}
            />
           
      </Content>
                
            
              
        </main>

      
    </Container>

    )
}