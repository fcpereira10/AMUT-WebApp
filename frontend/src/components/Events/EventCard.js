import React, { Component } from "react";
import {
  EventsCard,
  EventsIcon,
  EventsH2,
  EventsP,
  DetailsButton,
} from "./StyledEvents";

import Icon1 from "../../images/buracas do casmilo.png";
import moment from 'moment';

class Details extends Component {
  eventPage = (event) => {
    event.preventDefault();

    window.location.href = `/atividades/${this.props.id}`;
  };

  render() {
    return <DetailsButton to="" onClick={this.eventPage}>Ver Detalhes</DetailsButton>;
  }
}
export default class EventCard extends Component {
    
  render() {
    return (
      <>
     
        <EventsCard>
          <EventsIcon variant="top" src={Icon1} />
          <EventsCard.Body>
            <EventsH2>{moment(this.props.data.date).format("DD/MM/YYYY")}</EventsH2>
            <EventsP>{this.props.data.title}</EventsP>
          </EventsCard.Body>
          <Details id={this.props.data._id}/>
        </EventsCard>
      </>
    );
  }
}
