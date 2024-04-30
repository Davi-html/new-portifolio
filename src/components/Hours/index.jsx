import { Container } from "./style";
import { useRef, useEffect } from "react";

import imgNoite from "../../assets/noite.jpeg";
import imgDia from "../../assets/dia.jpeg";

export function Hour() {
  const data = new Date();
  data.toLocaleString("pt-BR");
  const hora = data.getHours();
  const minuto = data.getMinutes();

  const divRef = useRef(null);
  const divData = useRef(null);
  
  useEffect(() => {
    
    if(hora >= 0 && hora < 6){
      divRef.current.style.backgroundImage = `url(${imgNoite})`;
    }else if(hora >= 6 && hora < 18){
      divRef.current.style.backgroundImage = `url(${imgDia})`;
    }else{
      divRef.current.style.backgroundImage = `url(${imgNoite})`;
    }

  }, []);

  return (
    <Container className="div2" ref={divRef}>
      <h2 ref={divData}>
        {hora}:{minuto}
      </h2>
      <p>In Brazil</p>
    </Container>
  );
}
