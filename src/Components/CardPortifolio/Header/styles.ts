import styled from 'styled-components';

export const HeaderContainer = styled.div`
        width : 100%;
        background: var(--background);
        display: flex;
        padding : 1.6rem 0;
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
            nav {
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
            }
        }

`;
