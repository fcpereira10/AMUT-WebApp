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
                <MenuItem icon={<FaChartPie />}>Conta Corrente</MenuItem>
                <MenuItem icon={<FaUpload />}>Submissão</MenuItem>

                <MenuItem icon={<FaUser />}>Dados Pessoais</MenuItem>
               
              </Menu>
            </SidebarContent>
            {/* <SidebarFooter>
              <Menu iconShape="square">
                <Link to="/area-reservada/painel">
                  <MenuItem icon={<FiLogOut />}>Terminar Sessão</MenuItem>
                </Link>
              </Menu>
            </SidebarFooter> */}
          </ProSidebar>
        </div>
      </>
    );
  }
}
