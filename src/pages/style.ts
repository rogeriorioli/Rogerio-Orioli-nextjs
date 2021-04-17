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
    .post {
    .cover_image {
        width : 100%;
        margin : 30px 0;
    }
        max-width : 1200px;
        margin :30px auto; 
        h1 {
            font-size : 3rem;
              margin : 20px 0;
        }
        p{
            font-size :1.8rem;
            font-weight : 400;
            width : 100%;
            line-height : 2;
            strong {
            font-weight : bold;
            font-size :1.8rem;
            }
            img {
            margin : 20px auto;
            display :block;
    
            }
        }
        h2, h3 {
            font-size : 2.5rem;
            margin : 20px 0;
        }
        pre {
            tab-size : 2;
            background : black;
            color : white;
            padding : 20px;
            margin : 20px 0;
            font-size : 3rem;
            border-left : 6px solid var(--purple)
        }
      
    }

`;

export default PageContainer