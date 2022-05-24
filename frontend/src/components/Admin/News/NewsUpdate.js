import React, { Component } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Button } from "../../StyledButton";
import api from "../../../api";
import { Wrapper } from "../Activities/StyledActivities";
import { useParams } from "react-router-dom";
import { MdArrowBack, MdKeyboardArrowLeft } from "react-icons/md";

export default class NewsUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "62753c641d0d4911c2f68265",
      title: "",
      description: "",
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
  handleChangeInputDescription = async (event) => {
    const description = event.target.value;
    this.setState({ description });
  };

  handleUpdateArticle = async () => {
    const { id, title,description } = this.state;
    const payload = { title, description };

    await api.updateArticleById(id, payload).then((res) => {
      window.alert(`Notícia Atualizada com Sucesso!`);
      this.setState({
        title: "",
        description: "",
      });
    });
  };

  componentDidMount = async () => {
    const { id } = this.state;
    const article = await api.getArticleById(id);

    this.setState({
      title: article.data.data.title,
      description: article.data.data.description,
    });
  };

  render() {
    const { title, description } = this.state;
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
              <Form.Label style={{paddingTop: "10px"}}>Descrição</Form.Label>
              <Form.Control
                value={description}
                onChange={this.handleChangeInputDescription}
                as="textarea"
                rows={20}
              />
            </Form.Group>
          </Row>
        </Form>
        <Button to="admin" onClick={this.handleUpdateActivity}>
          Atualizar Atividade
        </Button>
      </Wrapper>
      </>
    );
  }
}
