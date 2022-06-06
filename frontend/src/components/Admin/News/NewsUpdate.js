import React, { useState, useEffect } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Button } from "../../StyledButton";
import api from "../../../api";
import { Wrapper } from "../Activities/StyledActivities";
import { useParams } from "react-router-dom";
import { MdArrowBack, MdKeyboardArrowLeft } from "react-icons/md";

export default function NewsUpdate(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [hover, setHover] = useState(false);

  const { id } = useParams();

  const onHover = () => {
    setHover(!hover);
  };

  const handleChangeInputTitle = async (event) => {
    setTitle(event.target.value);
  };
  const handleChangeInputDescription = async (event) => {
    setDescription(event.target.value);
  };

  const handleUpdateArticle = async () => {
    const payload = { title, date, description };

    await api.updateArticleById(id, payload).then((res) => {
      window.alert(`Notícia Atualizada com Sucesso!`);
    });
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
      <div
        className="btnWrapper"
        style={{
          paddingLeft: "30px",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        <Button to="/admin" onMouseEnter={onHover} onMouseLeave={onHover}>
          {hover ? (
            <MdArrowBack className="ArrowBack" />
          ) : (
            <MdKeyboardArrowLeft />
          )}{" "}
          Listagem
        </Button>
      </div>
      <Wrapper>
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label style={{ paddingTop: "10px" }}>Título</Form.Label>
              <Form.Control value={title} onChange={handleChangeInputTitle} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label style={{ paddingTop: "10px" }}>Descrição</Form.Label>
              <Form.Control
                value={description}
                onChange={handleChangeInputDescription}
                as="textarea"
                rows={20}
              />
            </Form.Group>
          </Row>
        </Form>
        <Button to="" onClick={handleUpdateArticle}>
          Atualizar Atividade
        </Button>
      </Wrapper>
    </>
  );
}
