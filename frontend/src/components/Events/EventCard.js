import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

import {
  EventsCard,
  EventsIcon,
  EventsH2,
  EventsP,
  DetailsButton,
} from "./StyledEvents";
import moment from 'moment';
import Icon1 from "../../images/events.svg";

export default function EventCard(props){


    return (
      <>
        <EventsCard>
          <EventsIcon variant="top" src={"http://localhost:3000/static/"+ props.data._id + ".png"}  onError={(e)=>{e.target.onerror = null; e.target.src=Icon1}} />
          <EventsCard.Body>
            <EventsH2>{moment(props.data.date).format("DD/MM/YYYY")}</EventsH2>
            <EventsP>{props.data.title}</EventsP>
          </EventsCard.Body>
          <DetailsButton to={`/atividades/${props.data._id}`}>Ver Detalhes</DetailsButton>
        </EventsCard>

        
      </>
    );
  };
