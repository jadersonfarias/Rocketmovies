import styled from "styled-components"
import  backgroundImg  from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;


`

export const Form = styled.form`
    padding: 0px 136px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 48px;
        font-weight: 700;
    }
    
    > P {
        color: #CAC4CF;
        font-size: 14px;  
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0px;
    }

    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        
        margin-top:42px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

    
`