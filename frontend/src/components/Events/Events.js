import React, { Component } from "react";
import {
  EventsContainer,
  EventsWrapper,
  EventsCard,
  EventsIcon,
  EventsH2,
  EventsP,
  ContentContainer,
  DetailsButton,
} from "./StyledEvents";

import Icon1 from "../../images/events.svg";


export default class Activities extends Component {
  render() {
    return (
      <>
        <ContentContainer>
          <EventsContainer>
            <EventsH2>Próximos Eventos</EventsH2>

            <EventsWrapper>
              <EventsCard>
                <EventsIcon variant="top" src={Icon1} />
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
                    AMUT'Caminhando<p>Caminhada as Buracas do Casmilo</p>
                  </EventsP>
                </EventsCard.Body>
                <DetailsButton to="">
                  Ver Detalhes
                </DetailsButton>
              </EventsCard>
            </EventsWrapper>
            <EventsH2>Eventos Anteriores</EventsH2>
            <EventsWrapper>
              <EventsCard>
                <EventsIcon variant="top" src={Icon1} />
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
                    AMUT'Caminhando<p>Caminhada as Buracas do Casmilo</p>
                  </EventsP>
                </EventsCard.Body>
                <DetailsButton to="">
                  Ver Detalhes
                </DetailsButton>
              </EventsCard>
            </EventsWrapper>
          </EventsContainer>
        </ContentContainer>
      </>
    );
  }
}
