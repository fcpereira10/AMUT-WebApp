import React, { Component } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Button } from "../../StyledButton";
import api from "../../../api";
import { Wrapper } from "./StyledActivities";
import { useParams } from "react-router-dom";
import { MdArrowBack, MdKeyboardArrowLeft } from "react-icons/md";

export default class ActivitiesUpdate extends Component {
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
  onHover = () =>{
    this.setState({hover: !this.state.hover});
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

  handleUpdateActivity = async () => {
    const { id, title, date, description, local } = this.state;
    const payload = { title, date, description, local };

    await api.updateActivityById(id, payload).then((res) => {
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
      <div className="btnWrapper" style={{ paddingLeft: "30px",alignItems: "flex-start", textAlign: "left"}}>
      <Button to='/admin' 
      onMouseEnter={this.onHover} 
      onMouseLeave={this.onHover}
>
        {this.state.hover ? <MdArrowBack className="ArrowBack" /> : <MdKeyboardArrowLeft/>} Listagem
      </Button>
    </div>
      <Wrapper>
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label style={{paddingTop: "10px"}}>Título</Form.Label>
              <Form.Control
                value={title}
                onChange={this.handleChangeInputTitle}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label style={{paddingTop: "10px"}}>Data da Atividade</Form.Label>
              <Form.Control
                value={date}
                onChange={this.handleChangeInputDate}
                type="date"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label style={{paddingTop: "10px"}}>Local</Form.Label>
              <Form.Control
                value={local}
                onChange={this.handleChangeInputLocal}
                rows={3}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label style={{paddingTop: "10px"}}>Descrição</Form.Label>
              <Form.Control
                value={description}
                onChange={this.handleChangeInputDescription}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Row>
        </Form>
        <Button to="/admin" onClick={this.handleUpdateActivity}>
          Atualizar Atividade
        </Button>
      </Wrapper>
      </>
    );
  }
}
