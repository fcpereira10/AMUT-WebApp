import React from "react";
import { Component } from "react";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";

export default class NewsPage extends Component {
  componentDidMount() {
    document.title = 'Notícias - AMUT Gondomar';
  }
  render() {
    return (
      <>
        <News />
        <Footer />
      </>
    );
  }
}