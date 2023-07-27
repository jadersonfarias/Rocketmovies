 import styled from "styled-components"

 export const Container = styled.textarea`
        width: 100%;
        height: 274px;
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
        color: ${({ theme }) => theme.COLORS.WHITE};
        
        border: none;
        resize: none;

        border-radius: 10px;
        margin: 30px 0px 30px;
        padding: 16PX;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GREY_1};
        }
 `