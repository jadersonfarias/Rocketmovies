import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi"

export function NoteItem({ isNew, value, onClick, ...rest }){
    return(
        <Container 
        isNew={isNew} //este isnew é atribuido ao container para poder ser usado no styled-component
        >
            <input 
            type="text" 
            value={value}
            readOnly={!isNew} //se não é novo não pode editar
            {...rest}
            />

            <button
            onClick={onClick}
            >
                {isNew ? <FiPlus/> : <FiX/>} {/* se for novo fiplus se não fix*/}
            </button>

        </Container>
    )
}