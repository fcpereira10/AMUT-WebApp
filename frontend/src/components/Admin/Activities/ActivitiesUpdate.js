import React, { useState, useEffect } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Button } from "../../StyledButton";
import api from "../../../api";
import { Wrapper } from "./StyledActivities";
import { useParams } from "react-router-dom";
import { MdArrowBack, MdKeyboardArrowLeft } from "react-icons/md";
import moment from "moment";

export default function ActivitiesUpdate(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [local, setLocal] = useState("");
  const [hover, setHover] = useState(false);

  const { id } = useParams();

  const onHover = () => {
    setHover(!hover);
  };

  const handleChangeInputTitle = async (event) => {
    setTitle(event.target.value);
  };
  const handleChangeInputDate = async (event) => {
    setDate(event.target.value);
  };
  const handleChangeInputDescription = async (event) => {
    setDescription(event.target.value);
  };
  const handleChangeInputLocal = async (event) => {
    setLocal(event.target.value);
  };

  const handleUpdateActivity = async () => {
    const payload = { title, date, description, local };

    await api.updateActivityById(id, payload).then((res) => {
      window.alert(`Atividade Atualizada com Sucesso!`);
    });
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
              <Form.Label style={{ paddingTop: "10px" }}>
                Data da Atividade
              </Form.Label>
              <Form.Control
                value={moment(date).format("yyyy-MM-DD")}
                onChange={handleChangeInputDate}
                type="date"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label style={{ paddingTop: "10px" }}>Local</Form.Label>
              <Form.Control
                value={local}
                onChange={handleChangeInputLocal}
                rows={3}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label style={{ paddingTop: "10px" }}>Descrição</Form.Label>
              <Form.Control
                value={description}
                onChange={handleChangeInputDescription}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Row>
        </Form>
        <Button to="" onClick={handleUpdateActivity}>
          Atualizar Atividade
        </Button>
      </Wrapper>
    </>
  );
}
