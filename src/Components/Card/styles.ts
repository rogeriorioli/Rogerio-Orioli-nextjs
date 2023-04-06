import styled from 'styled-components';

const Container = styled.div`
    display: flex;
       @media(max-width : 700px) {
              flex-direction: column;
        }
          @media(max-width : 1080px) {
              flex-direction: row;
              display: inline-block;
        }

   .card-repos {
        display : block;
        }
    .card {

        border : 1px solid var(--current-line);
        margin : 2rem 2rem  2rem 0;
        padding : 2rem;
        border-radius : 1.6rem;
        animation-name : pageFade;
        animation-duration: 1s;
        min-height : 240px;
        width: 350px;
        vertical-align : top;
        transition: all 0.2s;
        position : relative;
        @media(max-width : 700px) {
            width: 100%;
        }

        h2 {
              display : block;
                width : 100%;
               font-size : 1.8rem;
               text-transform : uppercase;
               line-break: anywhere;
        }
        p{
            font-weight : 100;
            font-size : 1.4rem;
            width : 100%;
            margin : 2rem 0;

        }
        a {
            text-decoration : none;
        }
        .label {
            background : var(--purple);
            font-size : 1.4rem;
            padding : 0.8rem;
            text-align : center;
            border-radius : 1rem;
            color: var(--background);
            width : auto;
            margin : 2px 5px;
            font-weight : 600;
            display: inline-block;
            
        }
        .card-footer {
            position : absolute;
            bottom : 0;
            margin-top : 2rem;
            display : flex;
            align-items : center;
            img {
                filter : grayscale(100%);
                width : 30px;
                height: 30px;
                border-radius: 50%;

            }
            a {
                font-size : 1.6rem;
                margin-left : 1rem;
            }
        }
        &:hover {
            background: var(--selection);
             color : var(--foreground);
             border-color : var(--purple);
        }
    }
    button, .button {
        border : 2px solid var(--purple);
        background : none;
        text-transform : uppercase;
        text-align: center;
        text-decoration : none;
        color : var(--purple);
        width : 200px;
        margin : 4rem auto;
        display : block;
        padding : 1rem;
        border-radius: 3rem;
        font-size: 1.6rem;
        transition : all 0.2s;
        cursor: pointer;
        &:focus {
            outline: none;
        }
       &:hover {
           width : 250px;
           background: var(--selection);
           color : var(--foreground);
       }
    }
`;

export default Container