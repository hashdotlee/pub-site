import React from 'react';
import {Card, CardBody,  Col, Button, Row} from 'reactstrap';
import StarRating from 'react-star-ratings';

const registerInfo = 
{
    "_id":"5325601808419035241",
    "aff_status":-1,
    "can_vote":false,
    "category":"FINANCIAL SERVICES","cookie_duration":2592000,
    "custom_epc":"",
    "logo":"https://static.accesstrade.vn/adv/img/1588845930_giphy_9.gif",
    "max_commission":"66,000 vnd","merchant":"mbbank_cpa_android","merchant_id":"5325599799711422478",
    "name":"MB Bank Android (X20 ATSP)","rejection_time":false,
    "start_time":"13-02-2020",
    "stats":{"approval_rate_3months":0.9986808548060857,"cvr_3months":0.009737254267273971,
    "daterange":"01/08/2020 - 01/11/2020","epc_3months":898.9593100773003,"gross_commission":2274151000.0,"total_votes":130,"value_votes":528},
    "type":1,
    "url":"https://com.mbmobile?utm_source=accesstrade"
}

 const rating = registerInfo.stats.value_votes / registerInfo.stats.total_votes;
 const CampaignRegister = () => { 
    return(
        <Card>
            <CardBody>
                <Row>
                    <Col md={4}>
                        <img className="d-block rounded-circle mr-auto ml-auto mb-2" alt="logo" src={registerInfo.logo} width={100}/>
                        <Button className="m-auto d-block">Xem trang</Button>
                    </Col>
                    <Col md={8}>
                        <h2>{registerInfo.name}</h2>
                        <h4>{registerInfo.category}</h4>
                        <p className="d-flex align-items-center">
                        <p><StarRating
                        rating = {rating}
                        starRatedColor="red"
                        numberOfStarts = {5}
                        name = "rating"
                        starDimension="20px"
                        starSpacing="5px"
                        /></p>
                        <p className="align-self-center ml-2 mt-1">{registerInfo.stats.total_votes} bình chọn</p></p>
                        <p></p>
                        <Button>Đăng kí</Button>
                    </Col>
                </Row>
                <Row>
                </Row>

            </CardBody>
        </Card>        
    )
}
export default CampaignRegister;