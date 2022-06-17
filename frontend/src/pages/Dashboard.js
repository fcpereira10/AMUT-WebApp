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
import AdminPage from "./Admin";
export default class DashboardPage extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    const payload = { token };
    api.getUserDataBasedOnToken(payload).then((res) => {

      this.setState({
        name: res.data.user.name,
        nr: res.data.user.nrUser,
        isAdmin: res.data.user.isAdmin,
        id: res.data.user.id, 
        loading: false
      })
    })
    document.title = 'Área Reservada - AMUT Gondomar';
  }
  constructor(props) {
    super(props);
    console.log("constructor")
    
    this.state = { selectedIndex: 1, loading: true };

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
        console.log(this.state)
        return <ContaCorrente id={this.state.id}/>;
      case 2:
        return <Submissao/>;
      case 3:
        return <DadosPessoais/>;
      default:
        return <ContaCorrente/>;
    }
  }
  render() {
    const {isAdmin, loading} = this.state;
    return (
      <>
       {!isAdmin &&
        <Sidebar setSelectedTab={this.setSelectedTab} parentCallback = {this.callbackFunction}/>}
        {!isAdmin && !loading &&
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
        </ContentContainer>}
        {isAdmin && <AdminPage />}
      </>
    );
  }
}
