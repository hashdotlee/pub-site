import React, { Component, Suspense } from "react";
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import("../components/Topbar"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const Footer = React.lazy(() => import("../components/Footer"));
const loading = () => <div className="text-center"></div>;


class HorizontalLayout extends Component {

    constructor(props) {
        super(props);

        this.openMenu = this.openMenu.bind(this);
        this.state = {
            isMenuOpened: false,
        }
    }

    /**
     * 
     */
    componentDidMount = () => {
        document.body.setAttribute('data-layout', 'topnav');
    }

    /**
     * Opens the menu - mobile
     */
    openMenu = e => {
        e.preventDefault();
        this.setState({ isMenuOpened: !this.state.isMenuOpened });
    };

    render() {
        // get the child view which we would like to render
        const children = this.props.children || null;
        return (
            <React.Fragment>
                <div id="wrapper">
                    <Suspense fallback={loading()}>
                        <Topbar openLeftMenuCallBack={this.openMenu} {...this.props} />
                    </Suspense>
                    <Suspense fallback={loading()}>
                        <Navbar isMenuOpened={this.state.isMenuOpened} {...this.props} />
                    </Suspense>

                    <div className="content-page">
                        <div className="content">
                            <Container fluid>
                                <Suspense fallback={loading()}>
                                    {children}
                                </Suspense>
                            </Container>
                        </div>

                        <Suspense fallback={loading()}>
                            <Footer />
                        </Suspense>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.Layout,
        user: state.Auth.user
    };
};
export default connect(
    mapStateToProps,
    null
)(HorizontalLayout);