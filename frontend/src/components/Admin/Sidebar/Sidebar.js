import React, { Component } from "react";
//react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,

  SidebarContent,
} from "react-pro-sidebar";
//icons from react icons
import { FaUsers, FaCalendarAlt, FaNewspaper } from "react-icons/fa";

//sidebar css from react-pro-sidebar module
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { menuCollapse: true, activeButton: 1};
  }

  setMenuCollapse = () => {
    this.setState({ menuCollapse: !this.state.menuCollapse});
  };


  setActiveButton(activeButton) {

    this.setState({activeButton});

  }



  render() {
    return (
      <>
        <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar
            collapsed={this.state.menuCollapse}
            onMouseEnter={this.setMenuCollapse}
            onMouseLeave={this.setMenuCollapse}
          >
            <SidebarContent>
              <Menu iconShape="square">
              <MenuItem className={this.state.activeButton === 1 ? 'active' : ''} icon={<FaCalendarAlt/>} onClick={()=>{ this.props.setSelectedTab(1); this.setActiveButton(1) }}>Atividades</MenuItem>
              <MenuItem className={this.state.activeButton === 2 ? 'active' : ''}  icon={<FaNewspaper/>} onClick={()=>{this.props.setSelectedTab(2); this.setActiveButton(2)}}>Notícias</MenuItem>          
              <MenuItem className={this.state.activeButton === 3 ? 'active' : ''}  icon={<FaUsers/>} onClick={()=>{this.props.setSelectedTab(3); this.setActiveButton(3)}}>Associados</MenuItem>          
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
      </>
    );
  }
}
