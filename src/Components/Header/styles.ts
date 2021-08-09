import styled from 'styled-components';

export const HeaderContainer = styled.div`
        width : 100%;
        background: var(--background);
        display: flex;
        padding : 1.2rem 0;
        height : 80px;
        border-bottom : 1px solid var(--current-line);
        align-items: center;
        z-index: 9999;
        position : relative;
        .header-content {
            display : flex;
            align-items : center;
            justify-content : space-between;
            h1 {
                a{
                    display : flex;
                    align-items: center;
                    font-size: 3rem;
                    text-decoration: none;
                    position: relative;
                    img {
                        width : 66px;
                        height : 66px;
                        object-fit: cover;
                        margin : 0 1.6rem;
                        border-radius: 50%;
                        border : 2px solid var(--purple);
                        transition : all 0.2s;
                    }
                    &:hover {
                        opacity : .9;
                    }
                }
            }
            button {
                background : none;
                 border : 1px solid  var(--purple) ;
                 width : 50px;
                 height : 50px;
                 color : white;
                 display : flex; 
                 align-items : center; 
                 justify-content : center;
                 font-size : 1.8rem;
                display : none;
                position: relative; 
                z-index : 99999999999;
                 @media (max-width : 1444px) {
                     display : block;
        }
            }
        }
`;
