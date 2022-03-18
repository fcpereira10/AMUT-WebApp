import React, {useState} from "react";

import { Button } from '../StyledButton'
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

import Vid from "../../videos/home.mp4";
import "./Video.css";




const Video = () => {

      const [hover, setHover] = useState(false)
    
      const onHover = () =>{
        setHover(!hover)
      }

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
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'>
                  Inscrever-se {hover ? <MdArrowForward className="ArrowForward" /> : <MdKeyboardArrowRight/>}
                </Button>
              </div>
            </div>
        </div>
      </>
    );
  }

export default Video;

