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
// reports
const ReportCampaign = React.lazy(() => import('../pages/report/Campaign'));
const ReportClick = React.lazy(() => import('../pages/report/Click'));
const ReportConversion = React.lazy(() => import('../pages/report/Conversion'));
const ReportUTM = React.lazy(() => import('../pages/report/UTM'));
// tools
const ToolsAPI = React.lazy(() => import('../pages/tool/Profile/APIKey'));
const ToolsDealCoupon = React.lazy(() => import('../pages/tool/DealCoupon'));
const ToolsDeepLink = React.lazy(() => import('../pages/tool/DeepLink'));
const ToolsPostback = React.lazy(() => import('../pages/tool/Postback'));
const ToolsPostbackLog = React.lazy(() => import('../pages/tool/PostbackLog'));
const ToolsProductLink = React.lazy(() => import('../pages/tool/ProductLink'));
const ToolsTrackLink = React.lazy(() => import('../pages/tool/TrackLink'));
// payment
const CrossCheck = React.lazy(() => import('../pages/payment/CrossCheck'));
const PaymentHis = React.lazy(() => import('../pages/payment/PaymentHis'));
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
            component: ReportConversion
        },
        {
            path: '/report/click-traffic',
            name: 'Lưu lượng Click',
            roles: ['Admin'],
            header: 'Navigation',
            icon: FeatherIcon.MousePointer,
            route: PrivateRoute,
            component: ReportClick
        },
        {
            path: '/report/campaigns',
            name: 'Chiến dịch',
            roles: ['Admin'],
            header: 'Navigation',
            icon: FeatherIcon.Truck,
            route: PrivateRoute,
            component: ReportCampaign
        },
        {
            path: '/report/utm',
            name: 'Báo cáo UTM',
            roles: ['Admin'],
            header: 'Navigation',
            icon: FeatherIcon.ShoppingBag,
            route: PrivateRoute,
            component: ReportUTM
        }
    ]
};
// tools
const toolsRoutes = {
    name: 'Công cụ',
    header: 'Navigation',
    icon: FeatherIcon.Tool,
    children: [
        {
            path: '/tools/product-link',
            name: 'Product Link',
            icon: FeatherIcon.Link,
            header: 'Navigation',
            component: ToolsProductLink,
            roles: ['Admin'],
            route: PrivateRoute
        },
        {
            path: '/tools/deep-link',
            name: 'Deep link',
            icon: FeatherIcon.Link2,
            component: ToolsDeepLink,
            header: 'Navigation',
            roles: ['Admin'],
            route: PrivateRoute
        },
        {
            path: '/tools/api',
            name: 'API',
            icon: FeatherIcon.Cloud,
            component: ToolsAPI,
            header: 'Navigation',
            roles: ['Admin'],
            route: PrivateRoute
        },
        {
            path: '/tools/deals',
            name: 'Deal coupon',
            icon: FeatherIcon.CreditCard,
            component: ToolsDealCoupon,
            header: 'Navigation',
            roles: ['Admin'],
            route: PrivateRoute
        },
        {
            name: 'Postback URL',
            icon: FeatherIcon.ArrowUpLeft,
            header: 'Navigation',
            children:[{
                path: '/tools/postback',
                name: 'Postback URL',
                icon: FeatherIcon.Camera,
                component: ToolsPostback,
                header: 'Navigation',
                roles: ['Admin'],
                route: PrivateRoute
            },
            {
                path: '/tools/postback-log',
                name: 'Postback Log',
                icon: FeatherIcon.Camera,
                component: ToolsPostbackLog,
                header: 'Navigation',
                roles: ['Admin'],
                route: PrivateRoute
            }
        ]
        },
        {
            path: '/tools/track-error',
            name: 'Tracking link error',
            icon: FeatherIcon.Camera,
            component: ToolsTrackLink,
            header: 'Navigation',
            roles: ['Admin'],
            route: PrivateRoute
        }
    ]
};
// payment
const paymentRoutes = {
    name: 'Thanh toán',
    icon: FeatherIcon.Gift,
    header: 'Navigation',
    children:[{
        path: '/payment/cross-check',
        name: 'Doanh thu',
        icon: FeatherIcon.Camera,
        component: CrossCheck,
        header: 'Navigation',
        roles: ['Admin'],
        route: PrivateRoute
    },
    {
        path: '/payment/payment-history',
        name: 'Lịch sử thanh toán',
        icon: FeatherIcon.Camera,
        component: PaymentHis,
        header: 'Navigation',
        roles: ['Admin'],
        route: PrivateRoute
    }]
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