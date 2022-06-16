import React, { Component } from "react";
import DadosPessoais from "../components/Dashboard/DadosPessoais";
import ContaCorrente from "../components/Dashboard/ContaCorrente";
import Submissao from "../components/Dashboard/Submissao";
import Sidebar from "../components/Dashboard/Sidebar";
import api from "../api";

import {
  Associado,
  Content,
  ContentContainer,
} from "../components/Dashboard/StyledDashboard";
export default class DashboardPage extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    const payload = { token };
    api.getUserDataBasedOnToken(payload).then((res) => {
      console.log(res.data.user)
      this.setState({
        name: res.data.user.name,
        nr: res.data.user.nrUser
      })
    })
    document.title = 'Área Reservada - AMUT Gondomar';
  }
  constructor(props) {
    super(props);
    
    this.state = { selectedIndex: 1,  };

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
              <br /> <b>{this.state.name}</b>
              <br />
              <b>{this.state.nr}</b>{" "}
            </Associado>
           { this.renderTab() }
          </Content>
        </ContentContainer>
      </>
    );
  }
}
