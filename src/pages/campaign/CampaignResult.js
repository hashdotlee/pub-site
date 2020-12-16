import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import Content from './Content';
import Filter from './Filter';

class CampaignResult extends Component{
    render(){
        return (
            <React.Fragment>
                <Row>
                    <Col lg={3}>
                        <Filter>
                        </Filter>

                    </Col>
                    <Col lg={9}>
                        <Content>
                        </Content>
                    </Col>
                </Row>

            </React.Fragment>
        )
    }
}
export default CampaignResult;