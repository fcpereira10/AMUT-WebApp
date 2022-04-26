import React, { Component } from "react";
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
  componentDidMount() {
    document.title = 'Área Reservada - AMUT Gondomar';
  }
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 1 };

    this.setSelectedTab = this.setSelectedTab.bind(this);
  }

  setSelectedTab(index) {
    this.setState({
      selectedIndex: index
    })

  }
  setSelectedPage() {
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
        <Sidebar setSelectedTab={this.setSelectedTab} parentCallback = {this.callbackFunction}/>
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
