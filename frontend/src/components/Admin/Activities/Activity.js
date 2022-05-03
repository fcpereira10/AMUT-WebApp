import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { FaList, FaPlus } from "react-icons/fa";
import { Button } from "../../StyledButton";
import ActivitiesInsert from "./ActivitiesInsert";

import ActivitiesList from "./ActivitiesList";
import { Title } from "./StyledActivities";

export default class Activity extends Component {
  constructor(props){
    super(props);
    this.state= { bool: true};
  }
  
   onClick = () =>{
    this.setState({bool: !this.state.bool});
  }
  renderTab() {
    if(this.state.bool===true){
      return <ActivitiesList/>
    }else
      return <ActivitiesInsert/>
  }

  render() {
    return <>
    <Row>
          <Col sm={10}>
            <Title>{this.state.bool ? "Lista de Atividades" : "Nova Atividade"}</Title>
          </Col>
          <Col sm={2}>
            <Button onClick={this.onClick} to="">{this.state.bool ? <FaPlus className="ArrowForward" /> : <FaList/>}</Button>
          </Col>
        </Row>
    { this.renderTab() }
    </>;
  }
}
