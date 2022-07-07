import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form as form } from "react-bootstrap";
import { SubmitButton } from "../StyledButton";

export const Container = styled.div`
  min-height: 692px;
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #dcdcdc;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled(form)`
  background: #3d3d3d;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled(form.Text)`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled(form.Label)`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled(Form.Control)`
  padding: 16px 16px;
  border: none;
  border-radius: 10px;
  
`;
export const FormGroup = styled(Form.Group)`
  margin-bottom: 32px;
  
`;
export const FormButton = styled(SubmitButton)`
  background: #d1312c;
  padding: 16px 0;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #d1312c;
    text-decoration: none;
    transform: translate(0%);
    transition: 0.25s ease-in-out ;
  }
`;
export const Reg = styled(Link)`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #d1312c;
    text-decoration: none;
    transform: translate(0%);
    transition: 0.25s ease-in-out ;
  }
`;
