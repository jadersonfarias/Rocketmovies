import { styled } from "styled-components";

export const Container = styled.div`
            width: 100%;

            >  header  {
                background-color: #FF859B0D;
                height: 144px;
                width:100%;
                display: flex;
                align-items: center;
                padding-left: 105px ;

                
            }
          `

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0 ;
     
    > div:nth-child(3){
        margin-bottom: 24px;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -115px auto 32px;

    width: 170px;
    height: 170px;
    
    > img{
        
        width: 170px;
        height: 170px;
        border-radius: 50%;
    }

    > label {
        width: 45px;
        height: 45px;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 14px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

         svg {
            width: 16px;
            height: 16px;
            
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
         }
    }
`