import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';
const { Title } = Typography;

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery(10);
    const globasStats = data?.data?.stats;

    if(isFetching) return 'Loading';

    return (
        <>
            <Title level={2} className="heading">Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic  title="Total Cryptocurrencies" value={globasStats.total}/></Col>
                <Col span={12}><Statistic  title="Total Exchanges" value={millify(globasStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic  title="Total Market Cap" value={millify(globasStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic  title="Total 24h Volume" value={millify(globasStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic  title="Total Markets" value={millify(globasStats.totalMarkets)}/></Col>
                
            </Row>

            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10</Title>
                <Title level={2} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified />

            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest news</Title>
                <Title level={2} className="show-more"><Link to="/news">Show more</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage
