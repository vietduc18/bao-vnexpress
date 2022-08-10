import Home from '~/pages/Home';
import Video from '~/pages/Video';
import International from '~/pages/International';

// public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/video', component: Video },
    { path: '/international', component: International },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
