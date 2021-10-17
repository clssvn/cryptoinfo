import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
const { Title } = Typography;

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery();
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
        </>
    )
}

export default Homepage
