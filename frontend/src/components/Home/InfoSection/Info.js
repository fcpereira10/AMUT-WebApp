import React, { Component } from "react";
import { Button } from "../../StyledButton";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  Img,
} from "./StyledInfo";

export default class Info extends Component {
  render() {
    return (
      <>
        <InfoContainer
          dark={this.props.info.dark}
          lightBg={this.props.info.lightBg}
          id={this.props.info.id}
        >
          <InfoWrapper>
            <InfoRow imgStart={this.props.info.imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{this.props.info.topLine}</TopLine>
                  <Heading lightText={this.props.info.lightText}>
                    {this.props.info.headLine}
                  </Heading>
                  <Subtitle lightTextDesc={this.props.info.lightTextDesc}>
                    {this.props.info.description}
                  </Subtitle>
                  <BtnWrap>
                    <Button
                      to="/"
                      smooth="true"
                      duration={500}
                      spy="true"
                      exact="true"
                      offset={-80}
                      primary={this.props.info.primary ? 1 : 0}
                      dark={this.props.info.dark ? 1 : 0}
                      dark2={this.props.info.dark2 ? 1 : 0}
                    >
                      {this.props.info.buttonLabel}
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={this.props.info.img} alt={this.props.info.alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
  }
}
