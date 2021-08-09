import styled from "styled-components";

export const HeroContainer = styled.div`
        background-color: var(--puple); 
        opacity: 1; 
        filter: brightness(1);
        width : 60%;
        padding : 5rem 2rem;
        margin-top : 10rem;
        margin-right : 20rem;
        position : relative;
        transition : all 0.3s;
        &:after {
            content: '';
            position: absolute;
            width: 18%;
            height: 75px;
                border-top: 30px solid var(--purple);
                border-left: 30px solid var(--purple);
            mix-blend-mode: overlay;
            left: -10px;
            top: 20px;
            z-index: 8;
            transition : all 0.3s;
        }
        &:before {
                content: '';
                position: absolute;
                width: 18%;
                height: 75px;
                background-color: transparent;
                mix-blend-mode: overlay;
                border-bottom: 30px solid var(--purple);
                border-right: 30px solid var(--purple);
                right: -10px;
                bottom: 20px;
                z-index: 8;
                transition : all 0.3s;
          }
        img {
            width : 100%;
            position : relative;
            display : block;
            z-index: 1;
            mix-blend-mode: lighten;
            opacity: .8;
            transition : all 0.5s;
            &:hover {
                opacity : 1;
            }
        }
        .image-container {
            position : relative;
            &:before {
                position : absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: var(--background);
                mix-blend-mode: overlay;
                content : '';
            }
        }
       @media (max-width : 1444px) {
        width : 80%;
        padding : 2rem;
        margin-top : 2rem;
        margin-right : 5em;
        &:after {
            top: -5px;
        }
        &:before {
            right: -3px;
            bottom: -4px;
        }
       } 
       @media (max-width : 1024px) {
           display : none;
       } 
`;
