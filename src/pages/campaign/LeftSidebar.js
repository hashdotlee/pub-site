import React, { Component } from 'react';
import { Card, CardBody, CardHeader, NavLink, Button } from 'reactstrap';
import {Link} from 'react-router-dom';


class LeftSidebar extends Component {

    constructor(props) {
        super(props);

        this.togglePanel = this.togglePanel.bind(this);
        this.state = { panel1: true, panel2: false, panel3: false };
    }

    /**
     * Toggle panel
     */
    togglePanel(panel) {
        var state = { ...this.state };
        state[panel] = !state[panel];
        this.setState(state);
    }

    render() {
        let Danhmuc = 
        [
            "Thương mại điện tử",
            "Du lịch & Giải trí",
            "Dịch vụ tài chính",
            "Dịch vụ trực tuyến",
            "Viễn thông",
            "Giáo dục",
            "Làm đẹp",
            "Di động",
            "Giải trí",
        ]
        return (
            <React.Fragment>

                <Link to = {'/'}>
                <Button>
                        Nổi bật
                </Button>
                </Link>
                <Link to = {'/campaign/result'}>
                <Button className="ml-2">
                        Tất cả
                </Button>
                </Link>
                <Card className="mt-3">
                    <CardHeader>Danh mục</CardHeader>
                    <CardBody>
                        {Danhmuc.map((item)=>{
                            return(
                                <NavLink className="font-size-16" href='/campaign/result'>
                                    {item}
                                </NavLink>
                            )
                        })}
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
};

export default LeftSidebar;
