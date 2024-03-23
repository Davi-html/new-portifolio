import styled from "styled-components";


export const Container = styled.div`
    border-radius: 8px;
    height: 192px;
    grid-area: div7;

    background-image: linear-gradient(rgb(0 0 0 / 40%), rgb(0 0 0 / 41%)), url('src/assets/github-background.webp') ;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;

    cursor: pointer;

    .git-icon{
        font-size: 30px;
        margin: 16px;
    }

    .content {
        h2{
            color: rgb(251 207 232 / 1);
            font-size: 20px;
            font-family: ui-monospace,Courier New, monospace;
            text-align: end;
        }

        p{
            color: rgb(251 207 232 / 1);
            text-align: end;
        }       
        
        margin: 0 16px 12px;
    }
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`