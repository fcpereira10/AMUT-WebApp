import React, { Component } from "react";
//react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,

  SidebarContent,
} from "react-pro-sidebar";
//icons from react icons
import { FaUser, FaChartPie, FaUpload } from "react-icons/fa";

//sidebar css from react-pro-sidebar module
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import ContaCorrente from "./ContaCorrente";
import Submissao from "./Submissao";
import DadosPessoais from "./DadosPessoais";
import { Link } from "react-router-dom";

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
              <MenuItem className={this.state.activeButton === 1 ? 'active' : ''} icon={<FaChartPie/>} onClick={()=>{ this.props.setSelectedTab(1); this.setActiveButton(1) }}>Conta Corrente</MenuItem>
              <MenuItem className={this.state.activeButton === 2 ? 'active' : ''}  icon={<FaUpload/>} onClick={()=>{this.props.setSelectedTab(2); this.setActiveButton(2)}}>Submissão</MenuItem>          
              <MenuItem className={this.state.activeButton === 3 ? 'active' : ''}  icon={<FaUser/>} onClick={()=>{this.props.setSelectedTab(3); this.setActiveButton(3)}}>Dados Pessoais</MenuItem>          
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
      </>
    );
  }
}
