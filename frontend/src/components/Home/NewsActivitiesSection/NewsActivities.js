import React from "react";
import { Component } from "react";
import {
  NewsContainer,
  NewsH1,
  NewsWrapper,
  ActivityNewsWrapper,
  ArticleCard,
} from "./StyledNews";
import { Button } from "../../StyledButton";
import { animateScroll as scroll } from "react-scroll";
import api from "../../../api/";
import ActivitiesCard from "./ActivitiesCard";
import NewsCard from "./NewsCard";

export default class NewsActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      news: [],
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
  };
  render() {
    const { activities, news } = this.state;

    const toggleHome = () => {
      scroll.scrollToTop();
    };

    return (
      <>
        <NewsContainer>
          <ActivityNewsWrapper>
            <NewsWrapper>
              <NewsH1>Atividade em Destaque</NewsH1>
              <ActivitiesCard data={activities} />
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
              <NewsCard data={news} />
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
