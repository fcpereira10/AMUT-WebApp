import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { SubmitButton } from "../../StyledButton";
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
      const id = res.data.id;
      const extension = this.state.selectedFile.name.substring(
        this.state.selectedFile.name.lastIndexOf(".")
      );
      const formData = new FormData();
      formData.append("file", this.state.selectedFile, id + extension);
      // Request made to the backend api
      // Send formData object
      api.uploadActivityImage(formData);
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
        <Form onSubmit={this.handleIncludeActivity}>
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
            <Form.Group as={Col} sm={4}>
              <Form.Label>Local</Form.Label>
              <Form.Control
                value={local}
                onChange={this.handleChangeInputLocal}
                rows={3}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={4}>
              <Form.Label>Data</Form.Label>
              <Form.Control
                value={date}
                onChange={this.handleChangeInputDate}
                type="date"
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
                rows={3}
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
          Adicionar Atividade
        </SubmitButton>
        </Form.Group>

        </Form>
      </Wrapper>
    );
  }
}
