import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";
import { Button } from "../../StyledButton";
import api from "../../../api";
import { CancelButton, Wrapper } from "./StyledActivities";
import {useParams} from "react-router-dom";

export default class ActivitiesUpdate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "6268585a5164c66a83557c45",
      title: "",
      date: "",
      description: "",
      local: "",
    };
  }

  handleChangeInputTitle = async event => {
    const title = event.target.value;
    this.setState({ title });
  };
  handleChangeInputDate = async event => {
    const date = event.target.value;
    this.setState({ date });
  };
  handleChangeInputDescription = async event => {
    const description = event.target.value;
    this.setState({ description });
  };
  handleChangeInputLocal = async event => {
    const local = event.target.value;
    this.setState({ local });
  };

  handleUpdateActivity = async () => {
    const { id, title, date, description, local } = this.state;
    const payload = { title, date, description, local };

    await api.updateActivityById(id, payload).then(res => {
      window.alert(`Atividade Atualizada com Sucesso!`);
      this.setState({
        title: "",
        date: "",
        description: "",
        local: "",
      });
    });
  };

  componentDidMount = async () => {
    const { id } = this.state
    const activity = await api.getActivityById(id)
 
    this.setState({
        title: activity.data.data.title,
        date: activity.data.data.date,
        description: activity.data.data.description,
        local: activity.data.data.local,
       
    })
  }

  render() {
    const { title, date, description, local } = this.state;
    return (
      <Wrapper>
        <Form>
          <Form.Group as={Col} sm={4}>
            <Form.Label>Título</Form.Label>
            <Form.Control
              value={title}
              onChange={this.handleChangeInputTitle}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Data da Atividade</Form.Label>
            <Form.Control
              value={date}
              onChange={this.handleChangeInputDate}
              type="date"
            />
          </Form.Group>
          <Form.Group as={Col} sm={4}>
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              value={description}
              onChange={this.handleChangeInputDescription}
              as="textarea"
              rows={3}
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
        </Form>
        <Button onClick={this.handleUpdateActivity}>Add Movie</Button>
      </Wrapper>
    );
  }
}
