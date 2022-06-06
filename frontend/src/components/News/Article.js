import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";

export default function Article(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [hover, setHover] = useState(false);

  const { id } = useParams();

  const onHover = () => {
    setHover(!hover);
  };

  useEffect(() => {
    const fetchData = async () => {
      const article = await api.getArticleById(id);
      setTitle(article.data.data.title);
      setDate(article.data.data.date);
      setDescription(article.data.data.description);
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
            to="/noticias"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            {hover ? (
              <MdArrowBack className="ArrowBack" />
            ) : (
              <MdKeyboardArrowLeft />
            )}{" "}
            Notícias
          </Button>
        </div>
        <NewsContainer>
          <NewsRow imgStart={false}>
            <Column1>
              <NewsH1>{title}</NewsH1>

              <DescriptionText>{description}</DescriptionText>
              <PublicationDate>
                {" "}
                Publicado em {moment(date).format("DD/MM/YYYY")}
              </PublicationDate>
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
