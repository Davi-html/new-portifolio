import { Container } from './style'
import { Tooltip } from 'react-tooltip'

import {
    SiDocker,
    SiExpress,
    SiGit,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVisualstudiocode,
} from "react-icons/si";

export function MyTooltip() {
    return (
        <Container className='div8'>
            <div className="icons">

                <a id="js"><SiJavascript /></a>
                <Tooltip anchorSelect="#js">JavaScript</Tooltip>

                <a id="ts"><SiTypescript /></a>
                <Tooltip anchorSelect="#ts">TypeScript</Tooltip>

                <a id="node"><SiNodedotjs /></a>
                <Tooltip anchorSelect="#node">Node.Js</Tooltip>

                <a id="express"><SiExpress /></a>
                <Tooltip anchorSelect="#express">Express.Js</Tooltip>

                <a id="react"><SiReact /></a>
                <Tooltip anchorSelect="#react">React</Tooltip>

                <a id="git"><SiGit /></a>
                <Tooltip anchorSelect="#git">Git</Tooltip>

                <a id="VSCode"><SiVisualstudiocode /></a>
                <Tooltip anchorSelect="#VSCode">VSCode</Tooltip>

                <a id="tailwind"><SiTailwindcss /></a>
                <Tooltip anchorSelect="#tailwind">Tailwind</Tooltip>

                <a id="mongo"><SiMongodb /></a>
                <Tooltip anchorSelect="#mongo">MongoDB</Tooltip>

                <a id="docker"><SiDocker /></a>
                <Tooltip anchorSelect="#docker">Docker</Tooltip>
                
            </div>

        </Container>
    )
}