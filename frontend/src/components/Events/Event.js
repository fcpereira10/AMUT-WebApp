import React, { Component } from "react";
import {
  EventsContainer,
  EventsWrapper,
  EventsH2,
  ContentContainer,
  EventsIcon,
  TipologiaWrapper,
  IconHora,
  IconTextTipologia,
  TextTipologia,
  TipologiaTitle,
  TipologiaValor,
  IconCalendario,
  IconLocal,
  IconInfo,
  EventsH1,
  DescriptionText,
  InfoRow,
  Column1,
  Column2,
} from "./StyledEvents";
import api from "../../api";
import Icon1 from "../../images/buracas do casmilo.png";
import moment from "moment";
import { Button } from "../StyledButton";
import { MdArrowBack, MdKeyboardArrowLeft } from "react-icons/md";

export default class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "6268585a5164c66a83557c45",
      title: "",
      date: "",
      description: "",
      local: "",
      hover: false,
    };
  }
  onHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  componentDidMount = async () => {
    const { id } = this.state;
    const activity = await api.getActivityById(id);

    this.setState({
      title: activity.data.data.title,
      date: activity.data.data.date,
      description: activity.data.data.description,
      local: activity.data.data.local,
    });
  };

  render() {
    const { title, date, description, local } = this.state;

    return (
      <>
        <ContentContainer>
          <div
            className="btnWrapper"
            style={{
              paddingLeft: "30px",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <Button
              to="/noticias"
              onMouseEnter={this.onHover}
              onMouseLeave={this.onHover}
            >
              {this.state.hover ? (
                <MdArrowBack className="ArrowBack" />
              ) : (
                <MdKeyboardArrowLeft />
              )}{" "}
              Eventos
            </Button>
          </div>
          <EventsContainer>
            <InfoRow imgStart={false}>
              <Column1>
                <EventsH1>{this.state.title}</EventsH1>

                <TipologiaWrapper>
                  <IconTextTipologia>
                    <IconCalendario />
                    <TextTipologia>
                      <TipologiaTitle>Data</TipologiaTitle>
                      <TipologiaValor>
                        {moment(this.state.date).format("DD/MM/YYYY")}
                      </TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>

                  <IconTextTipologia>
                    <IconLocal />
                    <TextTipologia>
                      <TipologiaTitle>Local</TipologiaTitle>
                      <TipologiaValor>{this.state.local}</TipologiaValor>
                    </TextTipologia>
                  </IconTextTipologia>
                </TipologiaWrapper>

                <DescriptionText>{this.state.description}</DescriptionText>
              </Column1>
              <Column2>
                {" "}
                <EventsIcon variant="top" src={Icon1} />
              </Column2>
            </InfoRow>

            <EventsWrapper></EventsWrapper>
          </EventsContainer>
        </ContentContainer>
      </>
    );
  }
}
