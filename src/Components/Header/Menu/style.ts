import styled from 'styled-components';

export const MenuContainer = styled.nav`
        ul {
            li {
                display : inline-block;
                margin : 0 0  0 20px;
                font-size :3rem;
                font-weight : bold;
                a {
                  text-decoration : none;
                }
                &.active{
                    border-bottom: 3px solid  var(--purple);
                    a {

                    }
                }
            }
        }
        @media (max-width : 1444px) {
              width : 250px;
              height : auto;
              background-color : var(--background);
              visibility : ${props => props.show};
              opacity : ${props => props.opacity};
              transition : all 0.5s;
              border-left : 1px solid var(--current-line);
              border-bottom : 1px solid var(--current-line);
              position: absolute;
              top : 80px;
              right : 0;
              padding : 20px;
              li {
                display : block;
                width : 100%;
                margin : 0 !important;
              }
        }
  
`;
