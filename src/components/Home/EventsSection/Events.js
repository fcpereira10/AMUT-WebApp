import React, { Component } from "react";
import {
  EventsContainer,
  EventsH1,
  EventsWrapper,
  EventsCard,
  EventsIcon,
  EventsH2,
  EventsP,
  DetailsButton,
  Router,
} from "./StyledEvents";
import { animateScroll as scroll } from "react-scroll";
import Icon1 from "../../../images/events.svg";
import Icon3 from "../../../images/santiago.png";
import Icon2 from "../../../images/buracas do casmilo.png";
import { Button } from "../../StyledButton";

export default class Events extends Component {
  render() {
    const toggleHome = () => {
      scroll.scrollToTop();
    };
    return (
      <>
        <EventsContainer>
          <EventsH1>Eventos em Destaque</EventsH1>
          <EventsWrapper>
            <EventsCard>
              <EventsIcon variant="top" src={Icon2} />
              <EventsCard.Body>
                <EventsH2>27/03/2022</EventsH2>
                <EventsP>
                  AMUT'Caminhando<p>Caminhada as Buracas do Casmilo</p>
                </EventsP>
              </EventsCard.Body>
              <DetailsButton to="">
                Ver Detalhes
              </DetailsButton>
            </EventsCard>
            <EventsCard>
              <EventsIcon variant="top" src={Icon1} />
              <EventsCard.Body>
                <EventsH2>27/03/2022</EventsH2>
                <EventsP>
                  AMUT'Caminhando <p>Caminho de Santiago 2022</p>
                </EventsP>
              </EventsCard.Body>
              <DetailsButton to="">
                Ver Detalhes
              </DetailsButton>
            </EventsCard>
            <EventsCard>
              <EventsIcon variant="top" src={Icon3} />
              <EventsCard.Body>
                <EventsH2>27/10/2022</EventsH2>
                <EventsP>
                  AMUT'Caminhando<p>Caminho de Santiago</p>
                </EventsP>
              </EventsCard.Body>
              <DetailsButton to="">
                Ver Detalhes
              </DetailsButton>
            </EventsCard>
          </EventsWrapper>
          <Button primary="true" dark="true" to="/eventos">
              Ver mais Eventos
          </Button>
        </EventsContainer>
      </>
    );
  }
}
