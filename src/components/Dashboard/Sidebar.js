import React, { Component } from "react";
import { Link } from "react-router-dom";
//react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
//icons from react icons
import { FaHome, FaUser, FaChartPie, FaUpload } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

//sidebar css from react-pro-sidebar module
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { menuCollapse: true };
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
                <MenuItem icon={<FaHome />}>Painel</MenuItem>
                <MenuItem icon={<FaUser />}>Dados Pessoais</MenuItem>
                <MenuItem icon={<FaChartPie />}>Conta Corrente</MenuItem>
                <MenuItem icon={<FaUpload />}>Submissão</MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />}>Terminar Sessão</MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
      </>
    );
  }
}
