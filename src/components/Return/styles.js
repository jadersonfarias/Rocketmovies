import styled from "styled-components"

import { Link } from "react-router-dom";

export const Container = styled(Link)`
        background: none;
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.COLORS.PINK};
        
        border: none;
        font-size: 16px;


        
`;

