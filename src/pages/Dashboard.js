import React, {Component} from 'react'
import Sidebar from '../components/Dashboard/Sidebar'
import { Associado, Content, ContentContainer } from '../components/Dashboard/StyledDashboard';
import Painel from '../components/Dashboard/Painel';

export default class DashboardPage extends Component {
  render() {
  return (
    <>
       <Sidebar />   
        <ContentContainer>
        
            <Content>
            <Associado>Olá,<br/> <b>Francisco Correia Pereira</b><br/><b>Nº 9999</b> </Associado>
                <Painel />
            </Content>
        </ContentContainer>
    </>
  )
}
}