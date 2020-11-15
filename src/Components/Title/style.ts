import styled from 'styled-components';

export const SectionTitle = styled.h1`
        font-weight : 600;
        font-size : 3.6rem;
        color: var(--foreground);
        margin : 3rem 0;
        position : relative;
        @media (max-width:700px) {
            font-size: 2.9rem;
        }
        &:after {
            content: "";
            height : 3px;
            width : 30rem;
            position : absolute;
            bottom : -10px ;
            left : 0;
            background : var(--purple);
        }
`;
