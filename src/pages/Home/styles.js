import styled from "styled-components"
import { Link } from "react-router-dom";


export const Container = styled.div`
        width: 100%;
        height: 100vh;

        display: grid;
        grid-template-rows: 120px auto;
        grid-template-areas: "header"
                             "content";

        ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.2rem;
  }

        > main {
            overflow-y: scroll;
        }

`
export const Content = styled.div`
        width:1121px ;
        margin: 50px auto;



        > header {
            display: flex;
            align-items: center;
            justify-content: space-between;  
        }


`

export const Button_add = styled(Link)`
                width: 207px;
                height: 58px;
                color: black;
                
       

                display: flex;
                align-items: center;
                justify-content:center;

                
                gap: 8px;

            

                font-size: 18px;
                font-weight: 400;
                background-color: ${({ theme }) => theme.COLORS.PINK};
                border-radius: 8px;

                > svg {
                    font-size: 26px;
                }

           
 `