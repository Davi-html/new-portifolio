import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;

    .icons {
        display: grid;
        grid-template-columns: 30px 30px 30px 30px 30px 30px 30px 30px;

        gap: 16px;
    }

    & svg {
        width: 30px;
        height: 30px;
    }
`