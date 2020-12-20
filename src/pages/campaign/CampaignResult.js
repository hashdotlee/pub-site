import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import Content from './Content';
import Filter from './Filter';

class CampaignResult extends Component{
    render(){
        return (
            <React.Fragment>
                <Row className="mt-3">
                    <Col md={4} xl={3}>
                        <Filter>
                        </Filter>

                    </Col>
                    <Col md={8} xl={9}>
                        <Content>
                        </Content>
                    </Col>
                </Row>

            </React.Fragment>
        )
    }
}
export default CampaignResult;