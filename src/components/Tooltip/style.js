import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .icons {
        display: grid;
        flex-wrap: wrap;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

        @media(width > 320px){
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        }

        gap: 16px;
    }

    & svg {
        width: 2em;
        height: 2em;
        filter: drop-shadow(0 0 4px #8b5cf6);
        opacity: .6;
        color: rgba(252, 231, 243, .9);
    }

    & svg:hover {
        opacity: .9;
    }

    #content {
        height: 100%;
        width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    #content-h1 {
        text-shadow: 0 0 7px #8b5cf6, 0 0 150px #8b5cf6;
        color: rgba(252, 231, 243, .9);
    }
`