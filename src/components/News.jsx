import React, { useState } from 'react';
import { Card, Row, Col, Select, Typography, Avatar } from "antd";
import moment from 'moment';

import { useGetNewsQuery } from '../services/newsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://masterthecrypto.com/wp-content/uploads/2019/10/CRYPTO-NEWS-AGGREGATORS.jpg';

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews, isFetching } = useGetNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    const { data } = useGetCryptosQuery(100);

    console.log(cryptoNews);

    if(isFetching) return 'Loading';

    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        optionFilterProp="children"
                        value={newsCategory}
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Option value='Cryptocurrency'>All Cryptocurrencies</Option>
                            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}

            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={12} xl={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img style={{ objectFit: 'cover', maxWidth:'100px', maxHeight: '100px' }} src={ news?.image?.thumbnail?.contentUrl || demoImage } alt="news" />
                            </div>
                            <p>
                                { news.description > 100 ? `${news.description.substring(0, 100)} ...` 
                                : news.description
                                }
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={ news.provider[0]?.image?.thumbnail?.contentUrl || demoImage } alt="" />
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News
