import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">20-20 CHALLENGE</Link>} scroll>
            <Navigation>
                <Link to="/participants">Participants Details</Link>
                <Link to="/books">Books</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/charts">Monthly Charts</Link>
                <Link to="/winners">Winners</Link>
                <Link to="/about_us">About Us</Link>
                <Link to="/contact_us">Contact Us</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">20-20 CHALLENGE</Link>}>
            <Navigation>
            <Link to="/participants">Participants Details</Link>
                <Link to="/books">Books</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/charts">Monthly Charts</Link>
                <Link to="/winners">Winners</Link>
                <Link to="/about_us">About Us</Link>
                <Link to="/contact_us">Contact Us</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
