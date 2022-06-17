import React, { Component } from "react";
import api from "../api";
import Sidebar from "../components/Admin/Sidebar/Sidebar";

import {
  Content,
  ContentContainer,
} from "../components/Admin/StyledAdmin";

import NewsList from "../components/Admin/News/NewsList";
import UsersList from "../components/Admin/Users/UsersList";
import Activity from "../components/Admin/Activities/Activity";
import News from "../components/Admin/News/News";
import NotFoundPage from "./404";

export default class AdminPage extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    const payload = { token };
    api.getUserDataBasedOnToken(payload).then((res) => {
    
      this.setState({
        name: res.data.user.name,
        nr: res.data.user.nrUser,
        isAdmin: res.data.user.isAdmin
      })
    })

    document.title = "Administração - AMUT Gondomar";
  }
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 1 };

    this.setSelectedTab = this.setSelectedTab.bind(this);
  }

  setSelectedTab(index) {
    this.setState({
      selectedIndex: index,
    });
  }
  setSelectedPage() {
    this.setState({ menuCollapse: !this.state.menuCollapse });
  }

  renderTab() {
   
      switch (this.state.selectedIndex) {
        case 1:
          return <Activity />;
        case 2:
          return <News />;
        case 3:
          return <UsersList />;
        default:
          return <Activity />;
      
    }
    
  }
  render() {
    const {isAdmin} = this.state;

    return (
      <>
         {isAdmin && <Sidebar
          setSelectedTab={this.setSelectedTab}
          parentCallback={this.callbackFunction}
        /> }
         {isAdmin &&
        <ContentContainer>
          <Content>{this.renderTab()}</Content>
        </ContentContainer>}
        {!isAdmin &&
        <NotFoundPage/>}
      </>
    );
  }
}
