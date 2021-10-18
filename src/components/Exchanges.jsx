import React from 'react';

import { Link } from "react-router-dom";
import { Card, Row, Col } from "antd";
import millify from "millify";

import { useGetExchangesQuery } from "../services/cryptoApi";

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;

    if (isFetching) return "Loading";
    return (
        <>
           <Row gutter={[32, 32]} className="crypto-card-container">
        {exchangesList.map((exchange) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={exchange.id}>
            <a href={exchange.websiteUrl}>
              <Card
                title={`${exchange.rank}. ${exchange.name}`}
                extra={<img className="crypto-image" src={exchange.iconUrl} />}
                hoverable
              >
                <p>24h Volume: $ {millify(exchange.volume)}</p>
                <p>Markets: {millify(exchange.numberOfMarkets)}</p>
              </Card>
            </a>
          </Col>
        ))}
      </Row> 
        </>
    )
}

export default Exchanges
