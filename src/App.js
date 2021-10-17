import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CoinDetails, News } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/" component={Homepage}></Route>
                            <Route exact path="/exchanges" component={Exchanges}></Route>
                            <Route exact path="/cryptocurrencies" component={Cryptocurrencies}></Route>
                            <Route exact path="/crypto/:coinId" component={CoinDetails}></Route>
                            <Route exact path="/news" component={News}></Route>
                        </Switch>
                    </div>
                </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                    Crypto Info<br />
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
        </div>
    </div>
    );
}

export default App;
