import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as FeatherIcon from 'react-feather';
import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
// dashboard
const Dashboard = React.lazy(() => import('../pages/dashboard'));
// campaign
const Campaign = React.lazy(() => import('../pages/campaign'));
const CampaignResult = React.lazy(() => import('../pages/campaign/CampaignResult'));
// report
const Report = React.lazy(() => import('../pages/report'));
// tools
const Tools = React.lazy(() => import('../pages/tool'));
// payment
const Payment = React.lazy(() => import('../pages/payment'));
// apps



// handle auth and authorization
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!isUserAuthenticated()) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
            }

            const loggedInUser = getLoggedInUser();
            // check if route is restricted by role
            if (roles && roles.indexOf(loggedInUser.role) === -1) {
                // role not authorised so redirect to home page
                return <Redirect to={{ pathname: '/' }} />;
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />,
    route: PrivateRoute,
};

// dashboards
const dashboardRoutes = {
    path: '/dashboard',
    name: 'Tổng quan',
    icon: FeatherIcon.Home,
    header: 'Navigation',
    badge: {
        variant: 'success',
        text: '1',
    },
    component: Dashboard,
    roles: ['Admin'],
    route: PrivateRoute
};
// campaign
const campaignRoutes = {
    path: '/campaign',
    name: 'Chiến dịch',
    icon: FeatherIcon.Send,
    header: 'Navigation',
    component: Campaign,
    exact:true,
    roles: ['Admin'],
    route: PrivateRoute
};
const campaignResultRoutes = {
    path: '/campaign/result',
    component: CampaignResult,
    roles: ['Admin'],
    route: PrivateRoute
};
// report
const reportRoutes = {
    path: '/report',
    name: 'Báo cáo',
    header: 'Navigation',
    icon: FeatherIcon.Book,
    children: [
        {
            path: '/report/conversion',
            name: 'Đơn hàng',
            roles: ['Admin'],
            header: 'Navigation',
            icon: FeatherIcon.ShoppingBag,
            route: PrivateRoute,
            component: Report
        },
        {
            path: '/report/click-traffic',
            name: 'Lưu lượng Click',
            roles: ['Admin'],
            header: 'Navigation',
            icon: FeatherIcon.MousePointer,
            route: PrivateRoute,
            component: Report
        },
        {
            path: '/report/campaigns',
            name: 'Chiến dịch',
            roles: ['Admin'],
            header: 'Navigation',
            icon: FeatherIcon.Truck,
            route: PrivateRoute,
            component: Report
        },
        {
            path: '/report/utm',
            name: 'Báo cáo UTM',
            roles: ['Admin'],
            header: 'Navigation',
            icon: FeatherIcon.ShoppingBag,
            route: PrivateRoute,
            component: Report
        }
    ]
};
// tools
const toolsRoutes = {
    path: '/tools',
    name: 'Công cụ',
    header: 'Navigation',
    icon: FeatherIcon.Tool,
    children: [
        {
            path: '/tools',
            name: 'Product Link',
            icon: FeatherIcon.Link,
            header: 'Navigation',
            component: Tools,
            roles: ['Admin'],
            route: PrivateRoute
        },
        {
            path: '/tools',
            name: 'Deep link',
            icon: FeatherIcon.Link2,
            component: Tools,
            header: 'Navigation',
            roles: ['Admin'],
            route: PrivateRoute
        },
        {
            path: '/tools',
            name: 'API',
            icon: FeatherIcon.Cloud,
            component: Tools,
            header: 'Navigation',
            roles: ['Admin'],
            route: PrivateRoute
        },
        {
            path: '/tools',
            name: 'Deal coupon',
            icon: FeatherIcon.CreditCard,
            component: Tools,
            header: 'Navigation',
            roles: ['Admin'],
            route: PrivateRoute
        },
        {
            path: '/tools',
            name: 'Postback URL',
            icon: FeatherIcon.ArrowUpLeft,
            component: Tools,
            header: 'Navigation',
            roles: ['Admin'],
            route: PrivateRoute
        },
        {
            path: '/tools',
            name: 'Tracking link error',
            icon: FeatherIcon.Camera,
            component: Tools,
            header: 'Navigation',
            roles: ['Admin'],
            route: PrivateRoute
        },
        {
            path: '/tools',
            name: 'Chrome extension',
            icon: FeatherIcon.Chrome,
            component: Tools,
            roles: ['Admin'],
            header: 'Navigation',
            route: PrivateRoute
        }
    ]
};
// payment
const paymentRoutes = {
    path: '/payment',
    name: 'Thanh toán',
    icon: FeatherIcon.Gift,
    header: 'Navigation',
    component: Payment,
    roles: ['Admin'],
    route: PrivateRoute
};

// auth
const authRoutes = {
    path: '/account',
    name: 'Auth',
    children: [
        {
            path: '/account/login',
            name: 'Login',
            component: Login,
            route: Route,
        },
        {
            path: '/account/logout',
            name: 'Logout',
            component: Logout,
            route: Route,
        },
        {
            path: '/account/register',
            name: 'Register',
            component: Register,
            route: Route,
        },
        {
            path: '/account/confirm',
            name: 'Confirm',
            component: Confirm,
            route: Route,
        },
        {
            path: '/account/forget-password',
            name: 'Forget Password',
            component: ForgetPassword,
            route: Route,
        },
    ],
};

// flatten the list of all nested routes
const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [
    rootRoute,
    dashboardRoutes,
    campaignRoutes,
    campaignResultRoutes,
    reportRoutes,
    toolsRoutes,
    paymentRoutes,
    authRoutes,
];

const authProtectedRoutes = [dashboardRoutes,campaignRoutes,reportRoutes,toolsRoutes,paymentRoutes,campaignResultRoutes];
const allFlattenRoutes = flattenRoutes(allRoutes);
export { allRoutes, authProtectedRoutes, allFlattenRoutes };