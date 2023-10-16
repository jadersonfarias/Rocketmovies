

import { createContext, useContext, useEffect, useState} from "react";

import { api } from "../services/api"

export const AuthContext = createContext({})
                //faz sentido deixar tudo que tenha a ver com autenticação aki
function AuthProvider({ children }){
    const [data, setData] = useState({})
    async function signIn({email, password}){ // bota com chave porque ele pega a informação independente da posição

    try{
        const response = await api.post("/sessions", { email, password}); //fazendo a requisição para o banco com os parametros passados
        const { user, token } = response.data;

        localStorage.setItem("@rocketnotes:user", JSON.stringify(user)); //pega os dados do usuario para guardar no localhost  / JSON.stringify(user) transforma em texto
        localStorage.setItem("@rocketnotes:token", token);

        api.defaults.headers.common['Authorization']= `Bearer ${token}`; // está sendo inserido para todas as pages assim não precisando passar para o context
        setData({ user,token })

        //console.log(user, token) //teste para observar se os dados estão chegando corretamente
    } catch(error){
        if(error.response){
            alert(error.response.data.message)
        }else{
            alert("Não foi possível entrar")
        }
    }
    }

function signOut(){
    const token = localStorage.removeItem("@rocketnotes:token")
    const user = localStorage.removeItem("@rocketnotes:user")

    setData({});
}

async function updateProfile({ user, avatarFile}){
    try{

        if(avatarFile){
            const fileUploadForm = new FormData() //transforma em arquivo 
            fileUploadForm.append("avatar",avatarFile)// adiciona o nome e img

            const response = await api.patch("/users/avatar", fileUploadForm);
            user.avatar = response.data.avatar
        }

        await api.put("/users", user);
        localStorage.setItem("@rocketnotes:user", JSON.stringify(user))//o setItem serve tanto para atualizar quanto para colocar contéudo

        setData({ user, token: data.token }) //passa o mesmo token

        alert("perfil atualizado!")

    }catch(error){
        if(error.response){
            alert(error.response.data.message)
        }else{
            alert("Não foi possível atualizar o perfil")
        }
    }
}

    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token")
        const user = localStorage.getItem("@rocketnotes:user")

        if(token && user) {
            api.defaults.headers.common['Authorization']= `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user) //transforma e number
            })
        }


    }, [])

    return(     //o children está recebento todas as rotas aki e devolvendo encapsulada no contexto
        <AuthContext.Provider value={{ 
            signIn, 
            user: data.user,
            signOut,
            updateProfile,
            }}> 
            {children} 
        </AuthContext.Provider>
    )
}

function useAuth(){ //para poder usar o contexto
    const context = useContext(AuthContext)

    return context;
}

export { AuthProvider, useAuth }