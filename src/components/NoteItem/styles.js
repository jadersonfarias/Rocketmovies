import styled from"styled-components"


export const Container = styled.div`
    width: ${({ isNew }) => isNew ? " 180px" : "113px"};
    display:flex;
    align-items: center;

    

    background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_400};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ?  `2px dashed ${ theme.COLORS.GRAY_1}` : "none"};

    

    border-radius: 10px;
    padding-right: 15px;
  
    

    > button {
        border:none;
        background: none;
       
        > svg {
            color:${({ theme }) => theme.COLORS.PINK};
            font-size:24px;
            margin-top: 8px;
        }
     
    }

    > input {
        height:56px;
        width:100%;

        padding:16px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background:transparent;

        border:none;
    }


`