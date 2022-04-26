import React, { Component } from "react";

import Sidebar from "../components/Admin/Sidebar/Sidebar";

import {
  Associado,
  Content,
  ContentContainer,
} from "../components/Admin/StyledAdmin";
import { ActivitiesInsert } from "../components/Admin/Activities";
import { ActivitiesList } from "../components/Admin/Activities";
import { ActivitiesUpdate } from "../components/Admin/Activities";
import { Nav } from "react-bootstrap";
import { Button } from "../components/StyledButton";

export default class AdminPage extends Component {
  componentDidMount() {
    document.title = 'Administração - AMUT Gondomar';
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
        return <ActivitiesList/>;
      case 2:
        return <ActivitiesInsert/>;
      default:
        return <ActivitiesList/>;
    }
  }
  render() {
    return (
      <>
        <Sidebar/>
        <ContentContainer>
          <Content >
            { this.renderTab() }
          </Content>
        </ContentContainer>
      </>
    );
  }
}
