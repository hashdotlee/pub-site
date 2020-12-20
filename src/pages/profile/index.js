import React, {Component} from 'react';
import * as FeatherIcon from 'react-feather';
import Info from './Info';
import APIKey from './APIKey';
import ChangePass from './ChangePass';
import Payment from './Payment';
import TrafficType from './TrafficType';
import { Row } from 'reactstrap';
import {Col, Card, TabContent, TabPane} from 'reactstrap';
import {Link} from 'react-router-dom';

class Profile extends Component {
    render(){
        const menu = [
            {
                name:'info',
                title: 'Thông tin cá nhân',
                icon: <FeatherIcon.Info/>,
                component:<Info/>
            },
            {
                name:'change-pass',
                title: 'Thay đổi mật khẩu',
                icon: <FeatherIcon.Lock/>,
                component:<ChangePass/>
            },
            {
                name:'payment',
                title: 'Thông tin thanh toán',
                icon: <FeatherIcon.Check/>,
                component:<Payment/>
            },
            {
                name:'traffic-type',
                title: 'Loại Traffic',
                icon: <FeatherIcon.Truck/>,
                component:<TrafficType/>
            },
            {
                name:'api-key',
                title: 'API key',
                icon: <FeatherIcon.Key/>,
                component:<APIKey/>
            }
        ];
        var param = this.props.match.params.tab || 'api-key';
        return(
            <React.Fragment>
            <h5 className="header-title mb-3 mt-0">Profile</h5>
            <Row>
                <Col sm={3}>
                <div>
                {menu.map((item)=>{ 
                    return(  
                    <Row>
                        <Col sm={12}>
                        <Link
                            to={"/profile/"+ item.name}>
                            <Card
                                className={(param===item.name?"actived ":"")+"m-0 p-3"}>
                                <i className="d-sm-none d-block mr-1">{item.icon}</i>
                                <span className="d-none d-sm-block">{item.title}</span>
                            </Card>
                        </Link>
                    </Col>
                    </Row>
                    )
                })}
                </div>
                </Col>
                <Col sm={9}>
                {menu.map((item)=>{ 
                    return(
                            <TabContent activeTab={param} className="p-0">
                                    <TabPane tabId = {item.name} key={item.name}>
                                        <Row>
                                            <Col sm="12">
                                                {item.component}
                                            </Col>
                                        </Row>
                                    </TabPane>
                            </TabContent>
                    )
                })}
                </Col>
                </Row>
            </React.Fragment>
        )
    }
}
export default Profile;