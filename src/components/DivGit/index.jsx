import { Container } from "./style";

import { FaGithub } from "react-icons/fa";

export function DivGit(){

    

    return(
        <Container className="div7" onClick={()=> location.href = "https://github.com/Davi-html"}>
            <div className="icon">
                <FaGithub className="git-icon"/>
            </div>
            <div className="content">
                <h2>GITHUB</h2>
                <p>check out my projects & contributions</p>
            </div>
        </Container>
    )
}