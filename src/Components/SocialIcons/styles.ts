import styled from 'styled-components';

export const SocialContainer = styled.div`
    display : flex;
    padding : 2rem 0;
    justify-content : center;
    @media (min-width : 700px) {
        justify-content : initial;
    }
    .social {
       margin-right : 2rem; 
        a {
        color : var(--purple) ;
            svg {
                stroke : var(--purple);
            }
        }
    }
`;
