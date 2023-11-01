import { styled } from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled.div`
    grid-area: header;

    height: 120px;
    width: 100%;

    border-bottom-width: 1px ;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600} ;

    display: flex;
    align-items: center;
    padding: 0px 103px;
    position: relative;
    

`
/*
export const Pesquisa = styled.div`
     > input {       
        height: 55px;
        width: 600PX;
        border-radius: 10px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};

        border: 0;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_3};
        }

        > svg {
            margin-left: 16px;
        }
}

`
*/

export const Profile = styled(Link)`
    display: flex;
    align-items: center;



    > img {
        width: 56px;
        height: 56px;

        border-radius: 50%;
    }

    > div {
        
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;



    
    strong {
        font-size: 18px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
   
    }


    

`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({theme}) => theme.COLORS.PINK}


`

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.4rem;
  flex-grow: 1;
`;

export const ButtonLogout = styled.button`
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.GRAY_1};

  font-size: 14px;
  line-height: 18px;

  position: absolute;
  bottom: 33px;
  right: 180px;
`