import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";
import DadosPessoais from "../components/Dashboard/DadosPessoais";
import ContaCorrente from "../components/Dashboard/ContaCorrente";
import Submissao from "../components/Dashboard/Submissao";
import Sidebar from "../components/Dashboard/Sidebar";
import {
  Associado,
  Content,
  ContentContainer,
} from "../components/Dashboard/StyledDashboard";

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 1 };
  }

  setSelectedPage = () => {
    this.setState({ menuCollapse: !this.state.menuCollapse });
  };

  renderTab() {
    switch(this.state.selectedIndex){
      case 1:
        return <ContaCorrente/>;
      case 2:
        return <Submissao/>;
      case 3:
        return <DadosPessoais/>;
      default:
        return <ContaCorrente/>;
    }
  }

  render() {
    return (
      <>
        <Sidebar />
        <ContentContainer>
          <Content>
            <Associado>
              Olá,
              <br /> <b>Francisco Correia Pereira</b>
              <br />
              <b>Nº 9999</b>{" "}
            </Associado>
            
           { this.renderTab() }
          </Content>
        </ContentContainer>
      </>
    );
  }
}
