import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "../../StyledButton";
import api from "../../../api";
import { Wrapper } from "../Activities/StyledActivities";

export default class NewsInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: Date.now(),
      description: "",
    };
  }

  handleChangeInputTitle = async (event) => {
    const title = event.target.value;
    this.setState({ title });
  };
  handleChangeInputDescription = async (event) => {
    const description = event.target.value;
    this.setState({ description });
  };

  handleIncludeArticle = async () => {
    const { title, date, description } = this.state;
    const payload = { title, date, description };

    await api.insertArticle(payload).then((res) => {
      window.alert(`Notícia inserida com Sucesso!`);
      this.setState({
        title: "",
        date: "",
        description: "",
      });
    });
  };

  render() {
    const { title, description } = this.state;
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

           
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                value={description}
                onChange={this.handleChangeInputDescription}
                as="textarea"
                rows={10}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} sm={4}>
              <Form.Label>Imagem</Form.Label>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>
            </Form.Group>
          </Row>
        </Form>
        <Button to="" onClick={this.handleIncludeArticle}>
          Adicionar Notícia
        </Button>
      </Wrapper>
    );
  }
}
