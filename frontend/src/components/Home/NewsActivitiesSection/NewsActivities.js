import React from "react";
import { Component } from "react";
import {
  NewsContainer,
  NewsH1,
  NewsWrapper,
  ActivityNewsWrapper,
  EventsCard,
} from "./StyledNews";
import { Button } from "../../StyledButton";
import { animateScroll as scroll } from "react-scroll";
import api from "../../../api/";
import ActivitiesCard from "./ActivitiesCard";
import NewsCard from "./NewsCard";
import { Spinner } from "react-bootstrap";

export default class NewsActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      news: [],
      isLoading: true,
    };
  }

  componentDidMount = async () => {
    await api.getMostRecentArticle().then((news) => {
      this.setState({
        news: news.data.data,
      });
    });
    await api.getMostRecentActivity().then((activities) => {
      this.setState({
        activities: activities.data.data,
      });
    });
    this.setState({ isLoading: false });
  };
  render() {
    const { activities, news, isLoading } = this.state;

    const toggleHome = () => {
      scroll.scrollToTop();
    };

    return (
      <>
        <NewsContainer>
          <ActivityNewsWrapper>
            <NewsWrapper>
              <NewsH1>Atividade em Destaque</NewsH1>
              { !isLoading ? <ActivitiesCard data={activities} />: <EventsCard style={{justifyContent: "center", alignItems: "center", display: "flex"}}><Spinner animation="border" variant="danger" style={{ width: "10rem", height: "10rem" }}/></EventsCard>}
              <Button
                primary="true"
                dark="true"
                to="/atividades"
                onClick={toggleHome}
              >
                Ver mais Atividades
              </Button>
            </NewsWrapper>
           
            <NewsWrapper>
              <NewsH1>Notícia em Destaque</NewsH1>
              { !isLoading ? <NewsCard data={news} /> : <EventsCard style={{justifyContent: "center", alignItems: "center", display: "flex"}}><Spinner animation="border" variant="danger" style={{ width: "10rem", height: "10rem" }}/></EventsCard>}
              <Button
                primary="true"
                dark="true"
                to="/noticias"
                onClick={toggleHome}
              >
                Ver mais Notícias
              </Button>
            </NewsWrapper>
          </ActivityNewsWrapper>
        </NewsContainer>
      </>
    );
  }
}
