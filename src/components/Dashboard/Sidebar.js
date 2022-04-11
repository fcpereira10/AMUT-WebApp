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
    this.state = { menuCollapse: true};
  }

  setMenuCollapse = () => {
    this.setState({ menuCollapse: !this.state.menuCollapse });
  };



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
              <MenuItem active={true} icon={<FaChartPie/>}>Conta Corrente</MenuItem>
                <MenuItem active={true} icon={<FaUpload />}>Submissão</MenuItem>
                <MenuItem active={true} icon={<FaUser />}>Dados Pessoais</MenuItem>
          
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
      </>
    );
  }
}
