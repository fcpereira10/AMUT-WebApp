import React, { Component } from "react";
import ReactTable from "react-table";
import api from "../../../api";
import { Delete, ListWrapper, Title, Update } from "./StyledActivities";

import "react-table/react-table.css";
import { Col, Row } from "react-bootstrap";
import { Button } from "../../StyledButton";

class UpdateActivity extends Component {
  updateUser = (event) => {
    event.preventDefault();

    window.location.href = `/atividades/editar/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Editar</Update>;
  }
}

class DeleteActivity extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Tem a certeza que pretende apagar ${this.props.id} permanentemente?`
      )
    ) {
      api.deleteActivityById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Apagar</Delete>;
  }
}

export default class ActivitiesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      columns: [],
      isLoading: false,
      activeButton: 1,
    };
  }
  setActiveButton(activeButton) {
    this.setState({ activeButton });
  }


  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllActivities().then((activities) => {
      this.setState({
        activities: activities.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { activities, isLoading } = this.state;

    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true,
      },
      {
        Header: "Título",
        accessor: "title",
        filterable: true,
      },
      {
        Header: "Data",
        accessor: "date",
        filterable: true,
      },
      {
        Header: "Descrição",
        accessor: "description",
        filterable: false,
      },
      {
        Header: "Local",
        accessor: "local",
        filterable: true,
      },
      {
        Header: "",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <DeleteActivity id={props.original._id} />
            </span>
          );
        },
      },
      {
        Header: "",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <UpdateActivity id={props.original._id} />
            </span>
          );
        },
      },
    ];

    let showTable = true;
    if (!activities.length) {
      showTable = false;
    }

    return (
      <>
        <Row>
          <Col sm={8}>
            {" "}
            <Title>Lista de Atividades</Title>
          </Col>
          <Col sm={4}>
            {" "}
            <Button className={this.state.activeButton === 1 ? 'active' : ''} onClick={()=>{ this.props.setSelectedTab(2); this.setActiveButton(2) }} to="">Novo</Button>
          </Col>
        </Row>

        <ListWrapper>
          {showTable && (
            <ReactTable
              data={activities}
              columns={columns}
              loading={isLoading}
              defaultPageSize={10}
              showPageSizeOptions={true}
              minRows={0}
            />
          )}
        </ListWrapper>
      </>
    );
  }
}
