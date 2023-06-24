// layout
import HomeLayout from '~/components/Layout/HomeLayout';
// page
import HomePage from '~/pages/home';
import LoginPage from '~/pages/auth/login';
import Register from '~/pages/auth/register';
import NewsPage from '~/pages/news';
import UserPage from '~/pages/user';
import DetailPage from '~/pages/detail';
import Detailproduct from '~/pages/detailproduct/Detailproduct';

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: HomeLayout,
    },
    {
        path: '/home',
        component: HomePage,
        layout: HomeLayout,
    },
    {
        path: '/login',
        component: LoginPage,
        layout: null,
    },
    {
        path: '/register',
        component: Register,
        layout: null,
    },
    {
        path: '/detail/:id',
        component: Detailproduct,
        layout: HomeLayout,
    },
    {
        path: '/user/:id',
        component: UserPage,
        layout: HomeLayout,
    },
    {
        path: '/news',
        component: NewsPage,
        layout: HomeLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
