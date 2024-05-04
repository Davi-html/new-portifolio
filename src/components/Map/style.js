import styled from "styled-components";
import mapImg from '../../assets/map-dark.png' 

export const Container = styled.div `
    background: linear-gradient(rgb(0 0 0 / 40%), rgb(0 0 0 / 41%)), url(${mapImg});
    background-size: cover;
    background-position: center center;
    background-color: rgba(109, 40, 217, .2);
    backdrop-filter: blur(12px);
    border-radius: 8px;
    width: 100%;
    grid-area: div3;

    .img {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        p {
            border-radius: 9999px;
            background: rgb(255 255 255 / 20%);
            
            
            padding: .2rem .625rem;
            border-radius: 9999px;
            color: white;
        }
    }

    .img img {
        width: 56px;
        height: 56px;

        border: solid 2px black;
        border-radius: 50%;
    }
`