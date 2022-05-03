import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { FaList, FaPlus } from "react-icons/fa";
import { Button } from "../../StyledButton";
import NewsInsert from "./NewsInsert";
import NewsList from "./NewsList";
import { Title } from "../Activities/StyledActivities";

export default class News extends Component {
  constructor(props){
    super(props);
    this.state= { bool: true};
  }
  
   onClick = () =>{
    this.setState({bool: !this.state.bool});
  }
  renderTab() {
    if(this.state.bool){
      return <NewsList/>
    }else
      return <NewsInsert/>
  }

  render() {
    return <>
    <Row>
          <Col sm={10}>
            <Title>Lista de Notícias</Title>
          </Col>
          <Col sm={2}>
            <Button onClick={this.onClick} to="">{this.state.bool ? <FaPlus className="ArrowForward" /> : <FaList/>}</Button>
          </Col>
        </Row>
    { this.renderTab() }
    </>;
  }
}
