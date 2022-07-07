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
    const toggleHome = () => {
      window.scrollTo(0, 0);
    };
    return (
      <>
        <EventsCard>
          <EventsIcon variant="top" src={"http://localhost:3000/static/"+ this.props.data._id + ".png"}  onError={(e)=>{e.target.onerror = null; e.target.src=Icon1}} />
          <EventsCard.Body>
            <EventsH2>{moment(this.props.data.date).format("DD/MM/YYYY")}</EventsH2>
            <EventsP>{this.props.data.title}</EventsP>
          </EventsCard.Body>
          <DetailsButton onClick={toggleHome} to={`/atividades/${this.props.data._id}`}>Ver Detalhes</DetailsButton>
        </EventsCard>
      </>
    );
  }
}
