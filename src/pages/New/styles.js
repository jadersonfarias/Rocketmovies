import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 120px auto ;
    grid-template-areas: "header"
                         "content";

> main{
        grid-area: content;
        overflow-y:auto ;
}

.tags{
        padding: 16px;
        background-color: ${({ theme }) => theme.COLORS.BLACK} ;

        display: flex;
  
        gap: 24PX;
        border-radius: 5px;
}
                          
`;


export const Form = styled.div`
        max-width: 1129PX;
        margin: 50px auto;

        > header {
               color :${({ theme }) => theme.COLORS.WHITE} ;

               > a {
                  color :${({ theme }) => theme.COLORS.PINK} ;
                  display: flex;
                  align-items: center;
                  gap: 5px;
                  font-size: 16px;
               }

               > h1 {
                  margin: 24px 0px 40px 0px;
                  font-weight: 500;
              
               }
                
        }

        > div {
                display: flex;
                gap: 40px;
        }
        

`

export const Buttons = styled.div`
        display: flex;
        gap: 40px;
       
        .delete {
                background-color: ${({ theme }) => theme.COLORS.BLACK} ;
                color :${({ theme }) => theme.COLORS.PINK} ;
        }
`