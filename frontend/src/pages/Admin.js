import React, { Component } from "react";

import Sidebar from "../components/Admin/Sidebar/Sidebar";

import {
  Content,
  ContentContainer,
} from "../components/Admin/StyledAdmin";

import NewsList from "../components/Admin/News/NewsList";
import UsersList from "../components/Admin/Users/UsersList";
import Activity from "../components/Admin/Activities/Activity";
import News from "../components/Admin/News/News";

export default class AdminPage extends Component {
  componentDidMount() {
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
    return (
      <>
        <Sidebar
          setSelectedTab={this.setSelectedTab}
          parentCallback={this.callbackFunction}
        />
        <ContentContainer>
          <Content>{this.renderTab()}</Content>
        </ContentContainer>
      </>
    );
  }
}
