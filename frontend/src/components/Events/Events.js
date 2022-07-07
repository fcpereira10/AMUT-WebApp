import React, { Component } from "react";
import {
  EventsContainer,
  EventsWrapper,
  EventsH2,
  ContentContainer,
} from "./StyledEvents";
import api from "../../api";
import EventCard from "./EventCard";
import { Spinner } from "react-bootstrap";
export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      pastActivities: [], 
      waitForLoadingStop: true,
    };
  }

  componentDidMount = async () => {
    await api.getFutureActivities().then((res) => {

      if(res.data.success) {

      this.setState({
        activities: res.data.data,
      });
    }
    });
   
    await api.getPastActivities().then((res) => {
      if (res.data.success) {
      this.setState({
        pastActivities: res.data.data,
        waitForLoadingStop: false
      });
    }
    });
    console.log(this.state.pastActivities)
  };

  render() {
    const { activities, pastActivities, waitForLoadingStop } = this.state;

    return (
      <>
     
      
      <ContentContainer>
      {!waitForLoadingStop &&<EventsContainer>
            <EventsH2>Próximos Eventos</EventsH2>
           { activities.length > 0 ? <EventsWrapper>
              {activities.map((activity) => (
                <EventCard key={activity._id} data={activity} />
              ))}
            </EventsWrapper> : <p>Não há atividades futuras</p> }
            {pastActivities.length > 0 && <EventsH2>Eventos Anteriores</EventsH2> }
            {pastActivities.length > 0 && <EventsWrapper>
              {pastActivities.map((activity) => (
                <EventCard key={activity._id} data={activity} />
              ))}  
            </EventsWrapper>
  }
          </EventsContainer>
  }
        </ContentContainer>
  
      </>
    );
  }
}
