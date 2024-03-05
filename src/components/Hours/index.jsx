import { Container } from "./style";
import React, { useRef, useEffect } from "react";

export function Hour() {
  const data = new Date();
  data.toLocaleString("pt-BR");
  const hora = data.getHours();
  const minuto = data.getMinutes();

  const divRef = useRef(null);
  const divData = useRef(null);
  
  useEffect(() => {
    const imgDia = "src/assets/dia.jpeg";
    const imgNoite = "src/assets/noite.jpeg";
    
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
