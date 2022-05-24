import React from "react";
import { Component } from "react";
import Footer from "../components/Footer/Footer";
import NewsUpdate from "../components/Admin/News/NewsUpdate";


export default class NewsUpdatePage extends Component {
  componentDidMount() {
    document.title = 'Atualizar Evento - AMUT Gondomar';
  }
  render() {
    return (
      <>
        <NewsUpdate />
        <Footer />
      </>
    );
  }
}