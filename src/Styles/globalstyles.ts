import { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle`
    /* dracula colors  */
    :root {
        --background : #282a36;
        --current-line :#44475a;
        --selection : #44475a;
        --foreground : #f8f8f2;
        --coment : #6272a4;	
        --cyan : #8be9fd;
        --green : #50fa7b;
        --orange: #ffb86c;
        --pink: #ff79c6;
        --purple: #bd93f9;
        --red: #ff5555;
        --yellow : #f1fa8c;	
    }

    html , body {
        margin : 0;
        padding: 0;
        background : var(--background);
            ::-webkit-scrollbar {
                width: 4px;
                
            }
            ::-webkit-scrollbar-thumb {
                background: var(--purple);
                transition: all .2s; 
                opacity : .6;
                }
                /* Track */
            ::-webkit-scrollbar-thumb:hover {
                background: var(--purple);
                opacity : .8;
                    transition: all .2s; 

            }
    }
    *{
        box-sizing: border-box;
        list-style: none;
        padding : 0;
        margin: 0;
        font-size : 60%;
        font-family: 'Quicksand', sans-serif;
        color : var(--foreground);
    }

    .container {
        max-width : 100%;
        padding : 0 4rem;
    }
    @keyframes pageFade {
        0%   {opacity : 0};
        100%  {opacity : 1};
    }
`
export default GlobalStyles