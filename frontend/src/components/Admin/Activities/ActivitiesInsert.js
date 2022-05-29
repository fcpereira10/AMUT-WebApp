import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "../../StyledButton";
import api from "../../../api";
import { Wrapper } from "./StyledActivities";

export default class ActivitiesInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: "",
      description: "",
      local: "",
    };
  }

  handleChangeInputTitle = async (event) => {
    const title = event.target.value;
    this.setState({ title });
  };
  handleChangeInputDate = async (event) => {
    const date = event.target.value;
    this.setState({ date });
  };
  handleChangeInputDescription = async (event) => {
    const description = event.target.value;
    this.setState({ description });
  };
  handleChangeInputLocal = async (event) => {
    const local = event.target.value;
    this.setState({ local });
  };

  handleIncludeActivity = async () => {
    const { title, date, description, local } = this.state;
    const payload = { title, date, description, local };

    await api.insertActivity(payload).then((res) => {
      window.alert(`Atividade inserida com Sucesso!`);
      this.setState({
        title: "",
        date: "",
        description: "",
        local: "",
      });
    });
  };

  render() {
    const { title, date, description, local } = this.state;
    return (
      <Wrapper>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Título</Form.Label>
              <Form.Control
                value={title}
                onChange={this.handleChangeInputTitle}
              />
            </Form.Group>
            <Form.Group as={Col} sm={4}>
              <Form.Label>Local</Form.Label>
              <Form.Control
                value={local}
                onChange={this.handleChangeInputLocal}
                rows={3}
              />
            </Form.Group>
            <Form.Group as={Col} sm={4}>
              <Form.Label>Data</Form.Label>
              <Form.Control
                value={date}
                onChange={this.handleChangeInputDate}
                type="date"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                value={description}
                onChange={this.handleChangeInputDescription}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Row>
        </Form>

        <Row className="mb-3">
            <Form.Group as={Col} sm={4}>
              <Form.Label>Imagem</Form.Label>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>
            </Form.Group>
          </Row>

        <Button to="" onClick={this.handleIncludeActivity}>
          Adicionar Atividade
        </Button>
      </Wrapper>
    );
  }
}
