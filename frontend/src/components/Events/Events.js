import React, { Component } from "react";
import {
  EventsContainer,
  EventsWrapper,
  EventsH2,
  ContentContainer,
} from "./StyledEvents";
import api from "../../api";
import EventCard from "./EventCard";
export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
    };
  }

  componentDidMount = async () => {
    await api.getAllActivities().then((activities) => {
      this.setState({
        activities: activities.data.data,
      });
    });
  };

  render() {
    const { activities } = this.state;

    return (
      <>
        <ContentContainer>
          <EventsContainer>
            <EventsH2>Próximos Eventos</EventsH2>

            <EventsWrapper>
              {activities.map((activity) => (
                <EventCard data={activity} />
              ))}
            </EventsWrapper>
            <EventsH2>Eventos Anteriores</EventsH2>
            <EventsWrapper>
              {activities.map((activity) => (
                <EventCard data={activity} />
              ))}
            </EventsWrapper>
          </EventsContainer>
        </ContentContainer>
      </>
    );
  }
}
