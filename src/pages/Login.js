import React, {Component} from 'react'
import Login from '../components/Login/Login'
import Footer from "../components/Footer/Footer";
export default class LoginPage extends Component {
  componentDidMount() {
    document.title = 'Login - AMUT Gondomar';
  }
  render() {
  return (
    <>

      <Login />
      <Footer />
    </>
  )
}
}