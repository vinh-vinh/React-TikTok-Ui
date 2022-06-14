// Layout
import { HeaderOnly } from '~/components/Layouut/';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes không đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Private routes đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
