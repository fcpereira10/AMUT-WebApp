import React, {Component} from "react";

import { Button } from "../../StyledButton";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

import Vid from "../../../videos/home.mp4";
import "./Video.css";

export default class Video extends Component {
  constructor(props){
    super(props);
    this.state= { hover: false};
  }
    

   onHover = () =>{
    this.setState({hover: !this.state.hover});
  }

  render() {
    return (

      <>
        <div className="videoContainer">
            <div className="divBg">
              <video className="videoBg" autoPlay loop muted  src={Vid} type="video/mp4" />
            </div>
            <div className="content">
              <h1 className="h1">Nutrimos a Saúde e a Felicidade do Ser Humano, Solidariamente!</h1>
              <p className="p">
                Torne-se Associado já Hoje!
              </p>
              <div className="btnWrapper">
                <Button to='signup' 
                onMouseEnter={this.onHover} 
                onMouseLeave={this.onHover}
                primary="true"
                dark="true">
                  Inscrever-se {this.state.hover ? <MdArrowForward className="ArrowForward" /> : <MdKeyboardArrowRight/>}
                </Button>
              </div>
            </div>
        </div>
      </>
    );
  }
}

