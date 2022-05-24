import React, { Component } from "react";
import {
  NewsContainer,
  NewsWrapper,
  ContentContainer,
  NewsIcon,
  NewsH1,
  DescriptionText,
  Column1,
  Column2,
  NewsRow,
  PublicationDate,
} from "./StyledNews";
import api from "../../api";
import Icon1 from "../../images/buracas do casmilo.png";
import moment from "moment";
import { Button } from "../StyledButton";
import { MdArrowBack, MdKeyboardArrowLeft } from "react-icons/md";

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "62753c641d0d4911c2f68265",
      title: "",
      date: "",
      description: "",
      local: "",
      hover: false,
    };
  }
  onHover = () =>{
    this.setState({hover: !this.state.hover});
  }

  componentDidMount = async () => {
    const { id } = this.state;
    const activity = await api.getArticleById(id);

    this.setState({
      title: activity.data.data.title,
      date: activity.data.data.date,
      description: activity.data.data.description,
    });
  };

  render() {

    return (
      <>
        <ContentContainer>
        <div className="btnWrapper" style={{ paddingLeft: "30px",alignItems: "flex-start", textAlign: "left"}}>
                <Button to='/noticias' 
                onMouseEnter={this.onHover} 
                onMouseLeave={this.onHover}
    >
                  {this.state.hover ? <MdArrowBack className="ArrowBack" /> : <MdKeyboardArrowLeft/>} Notícias
                </Button>
              </div>
          <NewsContainer>
         
            <NewsRow imgStart={false}>
              <Column1>
              
                <NewsH1>{this.state.title}</NewsH1>

                <DescriptionText>{this.state.description}</DescriptionText>
                <PublicationDate> Publicado em {moment(this.state.date).format("DD/MM/YYYY")}</PublicationDate>
              </Column1>
              <Column2>
                {" "}
                <NewsIcon variant="top" src={Icon1} />
              </Column2>
            </NewsRow>

            <NewsWrapper></NewsWrapper>
          </NewsContainer>
        </ContentContainer>
      </>
    );
  }
}
