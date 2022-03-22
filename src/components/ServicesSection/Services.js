import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./StyledServices";

import Icon1 from "../../images/events.svg";
import { Button } from "../StyledButton";

const Services = () => {
  return (
    <>
      <ServicesContainer id="Services">
        <ServicesH1>Eventos em Destaque</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon variant="top" src={Icon1} />
            <ServicesCard.Body>
              <ServicesH2>27/03/2022</ServicesH2>
              <ServicesP>
                AMUT'Caminhando<p>Caminhada as Buracas do Casmilo</p>
              </ServicesP>
            </ServicesCard.Body>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon variant="top" src={Icon1} />
            <ServicesCard.Body>
              <ServicesH2>27/03/2022</ServicesH2>
              <ServicesP>
                AMUT'Caminhando<p>Caminhada as Buracas do Casmilo</p>
              </ServicesP>
            </ServicesCard.Body>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon variant="top" src={Icon1} />
            <ServicesCard.Body>
              <ServicesH2>27/03/2022</ServicesH2>
              <ServicesP>
                AMUT'Caminhando<p>Caminhada as Buracas do Casmilo</p>
              </ServicesP>
            </ServicesCard.Body>
          </ServicesCard>
        </ServicesWrapper>
        <Button primary dark>
          Ver mais Eventos
        </Button>
      </ServicesContainer>
    </>
  );
};

export default Services;
