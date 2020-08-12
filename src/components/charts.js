import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './main';
import { Link } from 'react-router-dom';

class Charts extends Component {
    render() {
      return (
        <div className="demo-big-content">
    <Layout>
    <Header className="grey" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">CHARTS</Link>} scroll>
       </Header>       
        <Drawer title={<Link style={{textDecoration: 'none', color: 'blue'}} to="/">CHARTS</Link>}>
            <Navigation>
            <Link to="/january">January</Link>
                <Link to="/feburary">Feburary</Link>
                <Link to="/march">March</Link>
                <Link to="/april">April</Link>
                <Link to="/may">May</Link>
                <Link to="/june">June</Link>
                <Link to="/july">July</Link>
                <Link to="/august">August</Link>
                <Link to="/september">September</Link>
                <Link to="/october">October</Link>
                <Link to="/november">November</Link>
                <Link to="/december">December</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
 );
}
}
export default Charts;


