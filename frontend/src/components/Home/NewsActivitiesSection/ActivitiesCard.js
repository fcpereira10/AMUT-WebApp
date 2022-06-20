import React, { Component } from "react";
import {
  EventsCard,
  EventsIcon,
  EventsH2,
  EventsP,
  DetailsButton,
} from "./StyledNews";

import Icon1 from "../../../images/events.svg";
import moment from 'moment';

export default class ActivitiesCard extends Component {
    
  render() {
    
    return (
      <>
        <EventsCard>
          <EventsIcon variant="top" src={Icon1} />
          <EventsCard.Body>
            <EventsH2>{moment(this.props.data.date).format("DD/MM/YYYY")}</EventsH2>
            <EventsP>{this.props.data.title}</EventsP>
          </EventsCard.Body>
          <DetailsButton to={`/atividades/${this.props.data._id}`}>Ver Detalhes</DetailsButton>
        </EventsCard>
      </>
    );
  }
}
