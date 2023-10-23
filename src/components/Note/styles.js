 import styled from "styled-components"

 export const Container = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;

  > svg {
    font-size: 12px;
  }

   // background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800} ;
   background-color: #282124;
    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 26px;

    > h1 {
        flex:1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 8px ;
        
        color: ${({ theme }) => theme.COLORS.WHITE} ;
    }

    

    > p {
        margin: 35px 0 8px;    
        text-align: left;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
         line-height: 19px;

        color: ${({ theme })=> theme.COLORS.GRAY_3};
    }




    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
        gap: 8PX;

    }
 
 `