import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    height: auto;
    grid-area: div9;
    background-color: rgba(109, 40, 217, .2);
    backdrop-filter: blur(12px);
    border-radius: 8px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h2 {
        text-shadow: 0 0 7px #8b5cf6, 0 0 150px #8b5cf6;
        text-decoration-line: line-through;
        color: rgb(251 207 232 / 1);
    }

    p {
        color: rgba(251, 207, 232, .7);
    }
` 