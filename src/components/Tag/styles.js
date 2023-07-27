import styled from "styled-components"

export const Container = styled.span`
    font-size: 12px;
    padding: 10PX;
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};
    color: ${({theme}) => theme.COLORS.WHITE};
`

