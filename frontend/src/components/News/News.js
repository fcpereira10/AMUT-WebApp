import React, { Component } from "react";
import {
  BtnWrap,
  Column1,
  Column2,
  ContentContainer,
  DetailsButton,
  Heading,
  Img,
  ImgWrap,
  InfoRow,
  InfoWrapper,
  NewsCard,
  NewsContainer,
  NewsH2,
  NewsIcon,
  NewsLink,
  NewsLinkItems,
  NewsLinksContainer,
  NewsLinksWrapper,
  NewsLinkTitle,
  NewsP,
  NewsRow,
  NewsWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./StyledNews";
import Icon1 from "../../images/news.svg";
import { Button } from "../StyledButton";
import api from "../../api";
import ArticleCard from "./ArticleCard";
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount = async () => {
    await api.getAllNews().then((news) => {
      this.setState({
        news: news.data.data,
      });
    });
  };
  render() {
    const { news } = this.state;
    return (
      <>
        <ContentContainer>
          <NewsH2>Notícias</NewsH2>
          <NewsContainer>
            <NewsWrapper>
              {news.map((article) => (
                <ArticleCard key={article._id} data={article} />
              ))}
            </NewsWrapper>
          </NewsContainer>
        </ContentContainer>
      </>
    );
  }
}
