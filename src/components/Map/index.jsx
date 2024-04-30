import { Container } from './style'

import img from '../../assets/me.jpeg'

export function Map(){
    return(
        <Container className='div3'>
            <div className="img">
                <img src={img} />
                <p>📍 Brazil, Rio de Janeiro</p>
            </div>
        </Container>
    )
}