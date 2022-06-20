import React, { useState, useEffect } from "react";
import {
  EventsContainer,
  EventsWrapper,
  ContentContainer,
  EventImage,
  TipologiaWrapper,
  IconTextTipologia,
  TextTipologia,
  TipologiaTitle,
  TipologiaValor,
  IconCalendario,
  IconLocal,
  EventsH1,
  DescriptionText,
  InfoRow,
  Column1,
  Column2,
} from "./StyledEvents";
import api from "../../api";
import moment from "moment";
import Icon1 from "../../images/events.svg";
import { Button } from "../StyledButton";
import { MdArrowBack, MdKeyboardArrowLeft } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function Event(props) {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [local, setLocal] = useState("");
  const [hover, setHover] = useState(false);

  const { id } = useParams();
  

  const onHover = () => {
    setHover(!hover);
  };

  useEffect(() => {

      
      const fetchData = async () => {
      const activity = await api.getActivityById(id);
      setTitle(activity.data.data.title);
      setDate(activity.data.data.date);
      setDescription(activity.data.data.description);
      setLocal(activity.data.data.local);
    };
    fetchData();
    
  }, [id]);

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
            to="/atividades"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            {hover ? (
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
              <EventsH1>{title}</EventsH1>

              <TipologiaWrapper>
                <IconTextTipologia>
                  <IconCalendario />
                  <TextTipologia>
                    <TipologiaTitle>Data</TipologiaTitle>
                    <TipologiaValor>
                      {moment(date).format("DD/MM/YYYY")}
                    </TipologiaValor>
                  </TextTipologia>
                </IconTextTipologia>

                <IconTextTipologia>
                  <IconLocal />
                  <TextTipologia>
                    <TipologiaTitle>Local</TipologiaTitle>
                    <TipologiaValor>{local}</TipologiaValor>
                  </TextTipologia>
                </IconTextTipologia>
              </TipologiaWrapper>

              <DescriptionText>{description}</DescriptionText>
            </Column1>
            <Column2>
              {" "}
              <EventImage variant="top" src={"http://localhost:3000/static/"+ id + ".png"}  onError={(e)=>{e.target.onerror = null; e.target.src=Icon1}} />
            </Column2>
          </InfoRow>

          <EventsWrapper></EventsWrapper>
        </EventsContainer>
      </ContentContainer>
    </>
  );
}
