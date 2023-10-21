import styled from "styled-components"

export const Container = styled.div`
        width: 100%;
        height: 100vh;

        display: grid;
        grid-template-rows: 105px auto;
        grid-template-areas: 
        "header"
        "content";
        

        > main {
        grid-area: content; //coloca para colocar a região do const
        overflow-y: scroll;
        padding: 44px 0;
        
 
       
    }



`
export const Content = styled.div`
       max-width: 1050px;
       margin: 0 auto;

       display: flex;
       flex-direction: column;

       text-align: justify;

       > section {
        margin: 50px 0px;
       }

       > p {
            line-height: 24PX;
            font-weight: 400;
            font-size: 16px;
       }

 

       > div{
            display: flex;
            align-items: center;
            gap: 8px;

            font-weight:400 ;
            margin: 20px  0px 0px;
            color: ${({ theme }) => theme.COLORS.GREY_1};

            > img {
                height: 16px ;
                width: 16px;

                border-radius: 50%;
            }

            
            > svg {
                    color: ${({ theme }) => theme.COLORS.PINK};
                }

    

       }



`

export const Title_stars = styled.div `
        margin-right: 9px;
        font-size: 22px;
        font-weight: 500;

        
`





