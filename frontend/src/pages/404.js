import React, {Component} from 'react'
import Footer from "../components/Footer/Footer";
import NotFound from '../components/404/404';
export default class NotFoundPage extends Component {
  componentDidMount() {
    document.title = 'Oops! - AMUT Gondomar';
  }
  render() {
  return (
    <>
      <NotFound />
      <Footer />
    </>
  )
}
}