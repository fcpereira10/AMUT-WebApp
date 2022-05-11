import React, { Component } from "react";
import ReactTable from "react-table";
import api from "../../../api";
import { Delete, ListWrapper, Update } from "../Activities/StyledActivities";

import "react-table/react-table.css";

class UpdateArticle extends Component {
  updateUser = (event) => {
    event.preventDefault();

    window.location.href = `/admin/noticias/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Editar</Update>;
  }
}

class DeleteArticle extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Tem a certeza que pretende apagar ${this.props.id} permanentemente?`
      )
    ) {
      api.deleteArticleById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Apagar</Delete>;
  }
}

export default class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      columns: [],
      isLoading: false,
      activeButton: 1
    };
  }

  setActiveButton(activeButton) {

    this.setState({activeButton});

  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllNews().then((news) => {
      this.setState({
        news: news.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { news, isLoading } = this.state;

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
        Header: "",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <DeleteArticle id={props.original._id} />
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
              <UpdateArticle id={props.original._id} />
            </span>
          );
        },
      },
    ];

    let showTable = true;
    if (!news.length) {
      showTable = false;
      return <div>Não existem Notícias para serem mostrados.</div>
    }

    return (
      <>

        <ListWrapper>
          {showTable && (
            <ReactTable
              data={news}
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
