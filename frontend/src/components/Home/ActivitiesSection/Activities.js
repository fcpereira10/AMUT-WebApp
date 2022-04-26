import React, { Component } from "react";
import {
  ActivitiesContainer,
  ActivitiesH1,
  ActivitiesWrapper,
  ActivitiesCard,
  ActivitiesIcon,
  ActivitiesH2,
  ActivitiesP,
  DetailsButton,
} from "./StyledActivities";
import Icon1 from "../../../images/Activities.svg";
import Icon3 from "../../../images/santiago.png";
import Icon2 from "../../../images/buracas do casmilo.png";
import { Button } from "../../StyledButton";
import { animateScroll as scroll } from "react-scroll"
export default class Activities extends Component {
  render() {
    const toggleHome = () => {
      scroll.scrollToTop();
    }
    return (
      <>
        <ActivitiesContainer>
          <ActivitiesH1>Eventos em Destaque</ActivitiesH1>
          <ActivitiesWrapper>
            <ActivitiesCard>
              <ActivitiesIcon variant="top" src={Icon2} />
              <ActivitiesCard.Body>
                <ActivitiesH2>27/03/2022</ActivitiesH2>
                <ActivitiesP>
                  AMUT'Caminhando<p>Caminhada as Buracas do Casmilo</p>
                </ActivitiesP>
              </ActivitiesCard.Body>
              <DetailsButton to="">
                Ver Detalhes
              </DetailsButton>
            </ActivitiesCard>
            <ActivitiesCard>
              <ActivitiesIcon variant="top" src={Icon1} />
              <ActivitiesCard.Body>
                <ActivitiesH2>27/03/2022</ActivitiesH2>
                <ActivitiesP>
                  AMUT'Caminhando <p>Caminho de Santiago 2022</p>
                </ActivitiesP>
              </ActivitiesCard.Body>
              <DetailsButton to="">
                Ver Detalhes
              </DetailsButton>
            </ActivitiesCard>
            <ActivitiesCard>
              <ActivitiesIcon variant="top" src={Icon3} />
              <ActivitiesCard.Body>
                <ActivitiesH2>27/10/2022</ActivitiesH2>
                <ActivitiesP>
                  AMUT'Caminhando<p>Caminho de Santiago</p>
                </ActivitiesP>
              </ActivitiesCard.Body>
              <DetailsButton to="">
                Ver Detalhes
              </DetailsButton>
            </ActivitiesCard>
          </ActivitiesWrapper>
          <Button primary="true" dark="true" to="/eventos" onClick={toggleHome}>
              Ver mais Eventos
          </Button>
        </ActivitiesContainer>
      </>
    );
  }
}
