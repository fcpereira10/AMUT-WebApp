import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { SubmitButton } from "../../StyledButton";
import api from "../../../api";
import { Wrapper } from "../Activities/StyledActivities";
import moment from "moment";

export default class NewsInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: moment(Date.now()).format("YYYY-MM-DD"),
      description: "",
      selectedFile: "",
    };
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    const file = event.target.files[0];
    this.setState({ selectedFile: file });
  };

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
      const id = res.data.id;
      const extension = this.state.selectedFile.name.substring(
        this.state.selectedFile.name.lastIndexOf(".")
      );
      const formData = new FormData();
      formData.append("file", this.state.selectedFile, id + extension);
      // Request made to the backend api
      // Send formData object
      api.uploadArticleImage(formData);
      window.alert(`Notícia inserida com Sucesso!`);
      this.setState({
        title: "",
        date: Date.now(),
        description: "",
      });
    });
  };

  render() {
    const { title, description } = this.state;
    return (
      <Wrapper>
        <Form onSubmit={this.handleIncludeArticle}>
        <Form.Group role="form">
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Título</Form.Label>
              <Form.Control
                value={title}
                onChange={this.handleChangeInputTitle}
                required
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
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} sm={4}>
              <Form.Label>Imagem</Form.Label>
              <Form.Group controlId="formFile" className="mb-3">
              <Form.Control onChange={this.onFileChange} type="file" />
            </Form.Group>
            </Form.Group>
          </Row>
          <SubmitButton type="submit">
          Adicionar Notícia
        </SubmitButton>
        </Form.Group>
        </Form>
      </Wrapper>
    );
  }
}
