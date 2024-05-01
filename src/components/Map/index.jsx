import { Container } from './style'

import img from '../../assets/me.jpeg'

export function Map(){
    return(
        <Container className='div3'>
            <div className="img">
                <img src={img} />
                <p>📍 Rio de Janeiro, Brazil</p>
            </div>
        </Container>
    )
}