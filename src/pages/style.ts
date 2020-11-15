import styled from 'styled-components';

const PageContainer = styled.main`
    background-color : var(--background);
    display : flex;
    min-height : 100vh;
    align-items : center;
    animation-name : pageFade;
    animation-duration: 1s;
    flex-wrap : wrap;
    overflow : hidden;
    p{
        font-size: 2.2rem;
        line-height :2.6rem;
        max-width : 100%;
    }
 

    @media (min-width: 700px){
        p{
            width : 50%;
        }
    }
    .profile {
        display : flex;
        align-items : center;
        width: 100%;
        padding : 0 4rem;
        overflow: hidden;
        justify-content : center;
    }

`;

export default PageContainer