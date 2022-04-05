import React, {Component} from 'react'
import Sidebar from '../components/Dashboard/Sidebar'
import { Content, ContentContainer } from '../components/Dashboard/StyledDashboard';
import Painel from '../components/Dashboard/Painel';

export default class DashboardPage extends Component {
  render() {
  return (
    <>
       <Sidebar />   
        <ContentContainer>
            <Content>
                <Painel />
            </Content>
        </ContentContainer>
    </>
  )
}
}