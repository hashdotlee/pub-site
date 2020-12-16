import React, { Component } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Accordions from './Accordions';
import Cards from './Cards';
import RightSidebar from './RightSideBar';

class Campaign extends Component {
    render(){
        return (
            <React.Fragment>
            <Row className="page-title mt-2">
            <Col xl={3}>
                <h4 className="mb-1 mt-0">Chiến dịch</h4>
            </Col>
            <Col xl={5} className="align-items-center">
                <div className="app-search">
                    <form>
                        <div className="input-group">
                        <input type="text" className="form-control mr-1" placeholder="Tìm kiếm chiến dịch" />
                        <Button >Tìm kiếm</Button>
                        </div>
                    </form>
                </div>
            </Col>
            <Col xl={4}>
            <Breadcrumb className="float-right mt-1 font-size-14">
                <BreadcrumbItem>
                    <Link to="/">Version 1.0</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active key={0}>
                        Chiến dịch
                </BreadcrumbItem>
            </Breadcrumb>
            </Col>
            </Row>
            <Row>
                <Col sm={4} xl={3} className="mt-2">
                    <div className="sidebar-content">
                        <div id="sidebar-menu">
                            <Accordions></Accordions>
                        </div>
                    </div>
                </Col>
                <Col sm={8} xl={9} className="mt-2">
                    <Cards></Cards>
                </Col>
            </Row>
            <RightSidebar title="Card"><Cards></Cards></RightSidebar>
            </React.Fragment>
        ) 
    }
}
export default Campaign;